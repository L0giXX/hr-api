import type { Project } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { projectSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class ProjectController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const project = Controller.validate(projectSchema, req, res) as Project;
    const newProject = await prisma.project.create({
      data: {
        name: project.name,
        description: project.description,
        priority: project.priority,
        state: project.state,
        start_date: project.start_date,
        end_date: project.end_date,
      },
    });
    res.json(newProject);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const projects = await prisma.project.findMany();
    res.json(projects);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id },
    });
    res.json(project);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const project = Controller.validate(projectSchema, req, res) as Project;
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name: project.name,
        description: project.description,
        priority: project.priority,
        state: project.state,
        start_date: project.start_date,
        end_date: project.end_date,
      },
    });
    res.json(updatedProject);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const project = await prisma.project.delete({
      where: { id },
    });
    res.json(project);
  }
}
