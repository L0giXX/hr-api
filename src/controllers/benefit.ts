import type { Benefit } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { benefitSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class BenefitController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const benefit = Controller.validate(benefitSchema, req, res) as Benefit;
    const newBenefit = await prisma.benefit.create({
      data: {
        name: benefit.name,
        description: benefit.description,
        coverage: benefit.coverage,
      },
    });
    res.json(newBenefit);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const benefits = await prisma.benefit.findMany({
      include: {
        employees: true,
      },
    });
    res.json(benefits);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const benefit = await prisma.benefit.findUnique({
      where: { id },
    });
    res.json(benefit);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const benefit = Controller.validate(benefitSchema, req, res) as Benefit;
    const updatedBenefit = await prisma.benefit.update({
      where: { id },
      data: {
        name: benefit.name,
        description: benefit.description,
        coverage: benefit.coverage,
      },
    });
    res.json(updatedBenefit);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await prisma.benefit.delete({
      where: { id },
    });
    res.sendStatus(204);
  }
}
