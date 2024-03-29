import type { Employee } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { employeeSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class EmployeeController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const employee = Controller.validate(employeeSchema, req, res) as Employee;
    const newEmployee = await prisma.employee.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.phone,
        passwordHash: employee.passwordHash,
        isAdmin: employee.isAdmin,
        company: { connect: { name: employee.companyId } },
        department: { connect: { name: employee.departmentId } },
        role: { connect: { name: employee.roleId } },
        project: { connect: { name: employee.projectId! } },
        benefit: { connect: { id: employee.benefitId! } },
      },
    });
    res.json(newEmployee);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: { id },
    });
    res.json(employee);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const employee = Controller.validate(employeeSchema, req, res) as Employee;
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.phone,
        passwordHash: employee.passwordHash,
        isAdmin: employee.isAdmin,
        company: { connect: { name: employee.companyId } },
        department: { connect: { name: employee.departmentId } },
        role: { connect: { name: employee.roleId } },
        project: { connect: { name: employee.projectId! } },
        benefit: { connect: { id: employee.benefitId! } },
      },
    });
    res.json(updatedEmployee);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const employee = await prisma.employee.delete({
      where: { id },
    });
    res.json(employee);
  }
}
