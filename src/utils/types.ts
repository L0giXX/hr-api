import { PriorityTypes, TodoStates } from "@prisma/client";
import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.nullable(z.string()),
  passwordHash: z.string(),
  isAdmin: z.optional(z.boolean()),
  company: z.string(),
  department: z.string(),
  role: z.string(),
  project: z.nullable(z.string()),
  benefit: z.nullable(z.string()),
});
export type Employee = z.infer<typeof employeeSchema>;

export const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  employeeId: z.string(),
});
export type Address = z.infer<typeof addressSchema>;

export const companySchema = z.object({
  name: z.string(),
});
export type Company = z.infer<typeof companySchema>;

export const departmentSchema = z.object({
  name: z.string(),
});
export type Department = z.infer<typeof departmentSchema>;

export const roleSchema = z.object({
  name: z.string(),
});
export type Role = z.infer<typeof roleSchema>;

export const salarySchema = z.object({
  amount: z.number(),
  employeeId: z.string(),
});
export type Salary = z.infer<typeof salarySchema>;

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  priority: z.nativeEnum(PriorityTypes),
  state: z.nativeEnum(TodoStates),
  start_date: z.string(),
  end_date: z.string(),
});
export type Project = z.infer<typeof projectSchema>;

export const todoSchema = z.object({
  assignedToId: z.string(),
  description: z.string(),
  priority: z.string(),
  state: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  projectId: z.string(),
});
export type Todo = z.infer<typeof todoSchema>;

export const attendanceSchema = z.object({
  employeeId: z.string(),
  date: z.string(),
  status: z.string(),
});
export type Attendance = z.infer<typeof attendanceSchema>;

export const leaveRequestSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
  status: z.string(),
  employeeId: z.string(),
});
export type LeaveRequest = z.infer<typeof leaveRequestSchema>;

export const benefitSchema = z.object({
  name: z.string(),
  description: z.string(),
  converage: z.number(),
});
export type Benefit = z.infer<typeof benefitSchema>;
