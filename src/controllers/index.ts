import type { Request, Response } from "express";
import { type AnyZodObject } from "zod";

export default abstract class Controller {
  protected static validate(schema: AnyZodObject, req: Request, res: Response) {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    return result.data;
  }

  protected abstract create(req: Request, res: Response): Promise<void>;

  protected abstract getAll(req: Request, res: Response): Promise<void>;

  protected abstract get(req: Request, res: Response): Promise<void>;

  protected abstract update(req: Request, res: Response): Promise<void>;

  protected abstract delete(req: Request, res: Response): Promise<void>;
}
