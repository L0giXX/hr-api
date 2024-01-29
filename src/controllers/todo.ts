import type { Todo } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { todoSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class TodoController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const todo = Controller.validate(todoSchema, req, res) as Todo;
    const newTodo = await prisma.todo.create({
      data: {
        assigned_to: { connect: { id: todo.assignedToId } },
        description: todo.description,
        priority: todo.priority,
        state: todo.state,
        start_date: todo.start_date,
        end_date: todo.end_date,
        project: { connect: { id: todo.projectId! } },
      },
    });
    res.json(newTodo);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({
      where: { id },
    });
    res.json(todo);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const todo = Controller.validate(todoSchema, req, res) as Todo;
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        assigned_to: { connect: { id: todo.assignedToId } },
        description: todo.description,
        priority: todo.priority,
        state: todo.state,
        start_date: todo.start_date,
        end_date: todo.end_date,
        project: { connect: { id: todo.projectId! } },
      },
    });
    res.json(updatedTodo);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });
    res.json(deletedTodo);
  }
}
