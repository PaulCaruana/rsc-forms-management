import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  username: z.string().trim().email({
    message: "Invalid email address.",
  }),
});

export type User = z.infer<typeof userSchema>;
