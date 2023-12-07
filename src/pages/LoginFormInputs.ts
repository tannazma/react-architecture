import { z } from "zod";

// interface FormValues {
//   username: string;
//   password: string;
// }

export const formValuesSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(5),
});
export type LoginFormInputs = z.infer<typeof formValuesSchema>;
