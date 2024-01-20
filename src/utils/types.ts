import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  passwordHash: z.string(),
  department: z.string(),
  role: z.string(),
});

export type Employee = z.infer<typeof employeeSchema>;
