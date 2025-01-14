import { serverClient } from "./_trpc/serverClient";
import UserList from "@/app/_components/UserList";
import { User, userSchema } from "@/model/user";
import { UserForm } from "@/app/_components/UserForm";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

export default async function Home() {
  //const todos = await serverClient.todo.getTodos();
  const users = await serverClient.user.getUsers();
  const onFormAction = async (
    prevState: {
      message: string;
      user?: User;
      issues?: string[];
    },
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
      <UserForm onFormAction={onFormAction} />
      <UserList initialUserList={users} />
      {/*
      <TodoList initialTodos={todos} />
*/}
    </main>
  );
}
