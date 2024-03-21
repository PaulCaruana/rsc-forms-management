"use client";
import { useFormState } from "react-dom";
import { useRef } from "react";

import { Button } from "@/app/_components/widgets/button";
import { Input } from "@/app/_components/widgets/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/widgets/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User, userSchema } from "@/model/user";

type UserFormAction = {
  message: string;
  user?: User;
  issues?: string[];
};

export const UserForm = ({
  onFormAction,
}: {
  onFormAction: (
    prevState: UserFormAction,
    formData: FormData,
  ) => Promise<UserFormAction>;
}) => {
  const [state, formAction] = useFormState(onFormAction, {
    message: "",
  });
  const form = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <div>{state?.message}</div>
      <div>{state?.issues}</div>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
        className="space-y-8"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
