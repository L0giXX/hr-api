import type { Request, Response } from "express";
import { type AnyZodObject } from "zod";

const validation = (schema: AnyZodObject) => (req: Request, res: Response) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error);
  }
  return result.data;
};

export default validation;
