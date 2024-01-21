import { prisma } from "@utils/prisma";
import type { Request, Response } from "express";
import { employeeSchema, type Employee } from "@utils/types";
import validation from "@utils/validation";

const createEmployee = async (req: Request, res: Response) => {
  const employee = validation(employeeSchema)(req, res) as Employee;

  const newEmployee = await prisma.employee.create({
    data: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone: employee.phone,
      passwordHash: employee.passwordHash,
      department: employee.department,
      role: employee.role,
    },
  });

  res.json(newEmployee);
};

export { createEmployee };
