import express from "express";

import {
    getTechiesController
} from "../controllers/PagesController.js"

const router = express.Router();

//this routes is for admin routes this might be for addign question paper or everything


//for adding a techie
router.get("/get-techies", getTechiesController)


export default router;
