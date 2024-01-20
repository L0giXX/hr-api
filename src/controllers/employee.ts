import { prisma } from "@utils/prisma";
import type { Request, Response } from "express";
import { employeeSchema } from "@utils/types";
import type { Employee } from "@utils/types";

const createEmployee = async (req: Request, res: Response) => {
  const employee: Employee = req.body;
  // const result = employeeSchema.safeParse({
  //   body,
  // });

  // if (!result.success) {
  //   res.status(400).json(body);
  //   return;
  // }

  // const employee = result.data;

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
