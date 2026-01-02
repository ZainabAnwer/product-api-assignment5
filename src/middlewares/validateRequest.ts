import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

const validateRequest =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.errors,
      });
    }
  };

export default validateRequest;

