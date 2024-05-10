import express from "express";

import {
    getTechiesController,
    getCompaniesController,
    getStudentsPlacementsController
} from "../controllers/PagesController.js"
import { isUser, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//this routes is for admin routes this might be for addign question paper or everything


//for getting a techies
router.get("/get-techies", getTechiesController)

//for getting companies list
router.get("/placements/get-companies",getCompaniesController)


//for getting companies list
router.get("/placements/get-students",getStudentsPlacementsController)


export default router;
