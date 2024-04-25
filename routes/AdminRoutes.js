import express from "express";

import { isAdmin, isUser, requireSignIn } from "../middlewares/authMiddleware.js"


import {
    AddTechieController
} from "../controllers/AdminController.js"





const router = express.Router();


//this routes is for admin routes this might be for addign question paper or everything


//for adding a techie
router.post("/add-techie", requireSignIn, isAdmin, AddTechieController)


export default router;
