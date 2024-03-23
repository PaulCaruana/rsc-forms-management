import { serverClient } from "./_trpc/ServerClient";
import UserList from "@/app/_components/user/UserList";
import { User, userSchema } from "@/model/user";
import { revalidatePath } from "next/cache";
import UserInput from "@/app/_components/user/UserInput";

export const dynamic = "force-dynamic";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

export default async function Home() {
  const users = await serverClient.user.getUsers();
  const onFormAction = async (
    prevState: UserFormAction,
    formData: FormData,
  ) => {
    "use server";
    const data = Object.fromEntries(formData);
    const parsed = await userSchema.safeParseAsync(data);

    if (parsed.success) {
      await serverClient.user.create(parsed.data);
      console.log("User registered");
      revalidatePath("/"); // Revalidate page to see new content
      return { message: "User registered", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <main className="max-w-3xl mx-auto mt-5">
      <UserInput onFormAction={onFormAction} />
      <UserList initialUserList={users} />
    </main>
  );
}
