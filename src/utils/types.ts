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

export const departmentSchema = z.object({
  name: z.string(),
});
export type Department = z.infer<typeof departmentSchema>;

export const roleSchema = z.object({
  name: z.string(),
});
export type Role = z.infer<typeof roleSchema>;
