import { z } from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().positive("Price must be positive"),
    stock: z.number().int().min(0).optional(),
    images: z.array(z.string().url()).optional(),
  }),
});

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    price: z.number().positive().optional(),
    stock: z.number().int().min(0).optional(),
    images: z.array(z.string().url()).optional(),
  }),
});