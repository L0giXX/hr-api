import { prisma } from "@utils/prisma";
import type { Request, Response } from "express";
import { departmentSchema, type Department } from "@utils/types";
import validation from "@utils/validation";

const createDepartment = async (req: Request, res: Response) => {
  const department = validation(departmentSchema)(req, res) as Department;

  const newDepartment = await prisma.department.create({
    data: {
      name: department.name,
    },
  });

  res.json(newDepartment);
};

const getDepartments = async (req: Request, res: Response) => {
  const departments = await prisma.department.findMany();
  res.json(departments);
};

export { createDepartment, getDepartments };
