"use client";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { Form, SubmitButton, useZodForm } from "@/form";
import { User, userSchema } from "@/model/user";
import { FormInputText } from "@/app/_components/react-hook-form/FormInputText";

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
        <FormInputText required={true} name="firstName" label="First name" />
        <FormInputText name="lastName" label="Last name" />
      </div>
      <div>
        <FormInputText name="username" label="Email" />
      </div>
      <SubmitButton form={form}>Submit</SubmitButton>
    </Form>
  );
};

export default UserInput;
