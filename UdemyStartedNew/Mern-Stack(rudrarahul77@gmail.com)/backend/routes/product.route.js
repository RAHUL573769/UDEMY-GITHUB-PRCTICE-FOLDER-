import express from "express";
import { getProducts } from "../controllers/productControllers";

const router = express.Router();

router.route("/products").get(getProducts);
export const productRouter = router;
