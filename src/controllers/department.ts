import { prisma } from "@utils/prisma";
import { type Department, departmentSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class DepartmentController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const department = Controller.validate(
      departmentSchema,
      req,
      res,
    ) as Department;

    const newDepartment = await prisma.department.create({
      data: {
        name: department.name,
      },
    });

    res.json(newDepartment);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const departments = await prisma.department.findMany();
    res.json(departments);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const department = await prisma.department.findUnique({
      where: { id },
    });
    res.json(department);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const department = Controller.validate(
      departmentSchema,
      req,
      res,
    ) as Department;

    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: {
        name: department.name,
      },
    });

    res.json(updatedDepartment);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const department = await prisma.department.delete({
      where: { id },
    });
    res.json(department);
  }
}
