import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController";
import validateRequest from "../middlewares/validateRequest";

import {
  createProductSchema,
  updateProductSchema
} from "../schemas/productSchema";

const router = Router();

router.post("/", validateRequest(createProductSchema), createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.put("/:id", validateRequest(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
