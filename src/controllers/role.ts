import { prisma } from "@utils/prisma";
import { type Role, roleSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class RoleController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const role = Controller.validate(roleSchema, req, res) as Role;
    const newRole = await prisma.role.create({
      data: {
        name: role.name,
      },
    });
    res.json(newRole);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const roles = await prisma.role.findMany();
    res.json(roles);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const role = await prisma.role.findUnique({
      where: { id },
    });
    res.json(role);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const role = Controller.validate(roleSchema, req, res) as Role;
    const updatedRole = await prisma.role.update({
      where: { id },
      data: {
        name: role.name,
      },
    });
    res.json(updatedRole);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const role = await prisma.role.delete({
      where: { id },
    });
    res.json(role);
  }
}
