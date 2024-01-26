import { prisma } from "@utils/prisma";
import type { Request, Response } from "express";
import { roleSchema, type Role } from "@utils/types";
import validation from "@utils/validation";

const createRole = async (req: Request, res: Response) => {
  const role = validation(roleSchema)(req, res) as Role;

  const newRole = await prisma.role.create({
    data: {
      name: role.name,
    },
  });

  res.json(newRole);
};

const getRoles = async (req: Request, res: Response) => {
  const roles = await prisma.role.findMany();
  res.json(roles);
};

export { createRole, getRoles };
