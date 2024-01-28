import type { Company } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { companySchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class CompanyController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const company = Controller.validate(companySchema, req, res) as Company;
    const newCompany = await prisma.company.create({
      data: {
        name: company.name,
      },
    });
    res.json(newCompany);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const companies = await prisma.company.findMany();
    res.json(companies);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const company = await prisma.company.findUnique({
      where: { id },
    });
    res.json(company);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const company = Controller.validate(companySchema, req, res) as Company;
    const updatedCompany = await prisma.company.update({
      where: { id },
      data: {
        name: company.name,
      },
    });
    res.json(updatedCompany);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await prisma.company.delete({
      where: { id },
    });
    res.sendStatus(204);
  }
}
