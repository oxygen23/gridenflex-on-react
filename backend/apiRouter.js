import Router from "express";
import ApiPostController from "./apiPostController.js";

const router = Router();

router.get('/getReviews', ApiPostController.getReviews)
router.post('/sendReview', ApiPostController.sendReview)
router.post('/sendContacts', ApiPostController.sendContacts)

export default router;