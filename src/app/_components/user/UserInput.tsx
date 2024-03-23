"use client";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { Form, useZodForm } from "@/form";
import { User, userSchema } from "@/model/user";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/widgets/form";
import { Input } from "@/app/_components/widgets/input";
import { Button } from "@/app/_components/widgets/button";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

type Props = {
  onFormAction: (
    prevState: UserFormAction,
    formData: FormData,
  ) => Promise<UserFormAction>;
};

const UserInput: React.FC<Props> = ({ onFormAction }) => {
  const [, formAction] = useFormState(onFormAction, {
    message: "",
  });

  const form = useZodForm({
    schema: userSchema,
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form
      form={form}
      formRef={formRef}
      action={formAction}
      handleSubmit={async () => {
        formRef?.current?.submit();
      }}
      className="space-y-2"
    >
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>Your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormDescription>Your email address.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <Button type="submit">Submit</Button>{" "}
    </Form>
  );
};

export default UserInput;
