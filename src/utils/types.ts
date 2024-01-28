import { PriorityTypes, TodoStates } from "@prisma/client";
import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  hireDate: z.date(),
  passwordHash: z.string(),
  isAdmin: z.boolean(),
  companyId: z.string(),
  departmentId: z.string(),
  roleId: z.string(),
  projectId: z.string().nullable(),
  benefitId: z.string().nullable(),
});

export const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  employeeId: z.string(),
});

export const companySchema = z.object({
  name: z.string(),
});

export const departmentSchema = z.object({
  name: z.string(),
});

export const roleSchema = z.object({
  name: z.string(),
});

export const salarySchema = z.object({
  amount: z.number(),
  employeeId: z.string(),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  priority: z.nativeEnum(PriorityTypes),
  state: z.nativeEnum(TodoStates),
  start_date: z.date(),
  end_date: z.date(),
});

export const todoSchema = z.object({
  assignedToId: z.string(),
  description: z.string(),
  priority: z.string(),
  state: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  projectId: z.string(),
});

export const attendanceSchema = z.object({
  employeeId: z.string(),
  date: z.string(),
  status: z.string(),
});

export const leaveRequestSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
  status: z.string(),
  employeeId: z.string(),
});

export const benefitSchema = z.object({
  name: z.string(),
  description: z.string(),
  converage: z.number(),
});
