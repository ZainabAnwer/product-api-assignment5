// src/types/index.ts

export interface ProductType {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
