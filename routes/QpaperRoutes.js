import express from "express";
import {
    CreateQpaper,
    getPapersController
 
} from "../controllers/SubController.js"

import { isAdmin, isUser, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

////register user method post
//add a subject for question papers
router.post("/add-qpapersub",requireSignIn,isAdmin, CreateQpaper);

//get question papers subjects
router.get("/get-papers", getPapersController);

///protected routes

//user route check
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin route checking
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
