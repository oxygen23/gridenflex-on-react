import Router from "express";
import ApiPostController from "./apiPostController.js";

const router = Router();

router.get('/review', ApiPostController.review)

export default router;