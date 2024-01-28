import type { Salary } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { salarySchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class SalaryController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const salary = Controller.validate(salarySchema, req, res) as Salary;
    const newSalary = await prisma.salary.create({
      data: {
        amount: salary.amount,
        employee: { connect: { id: salary.employeeId } },
      },
    });
    res.json(newSalary);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const salaries = await prisma.salary.findMany();
    res.json(salaries);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const salary = await prisma.salary.findUnique({
      where: { id },
    });
    res.json(salary);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const salary = Controller.validate(salarySchema, req, res) as Salary;
    const updatedSalary = await prisma.salary.update({
      where: { id },
      data: {
        amount: salary.amount,
        employee: { connect: { id: salary.employeeId } },
      },
    });
    res.json(updatedSalary);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deletedSalary = await prisma.salary.delete({
      where: { id },
    });
    res.json(deletedSalary);
  }
}
