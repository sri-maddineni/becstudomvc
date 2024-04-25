import express from "express";
import {
    getUserData
} from "../controllers/authController.js";

import {isAdmin, isUser, requireSignIn} from "../middlewares/authMiddleware.js"
import { getuserscontroller } from "../controllers/userController.js"




const router = express.Router();

////register user method post

router.get("/userdata/:uid", getUserData);

//get all users for admin purpose
router.get("/getusers",requireSignIn,isAdmin,getuserscontroller)




export default router;
