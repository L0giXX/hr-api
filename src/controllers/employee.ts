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
      role: { connect: { name: employee.role } },
      department: { connect: { name: employee.department } },
    },
  });

  if (!newEmployee) {
    return res.status(500).json({ error: "Employee not created" });
  }
  res.json(newEmployee);
};

const getEmployees = async (req: Request, res: Response) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
};

const getEmployee = async (req: Request, res: Response) => {
  const employee = await prisma.employee.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(employee);
};

const deleteEmployees = async (req: Request, res: Response) => {
  await prisma.employee.deleteMany();
  res.json("all employees deleted");
};
export { createEmployee, getEmployees, deleteEmployees };
