import express from "express";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import Jwt from "jsonwebtoken";


export const getuserscontroller=async (req,res)=>{
    try {
        const users=await userModel.find({})
        if(users){
            return res.status(200).send({
                success:true,
                message:"users fetched sucessfully",
                users
            })
        }
        else{
            return res.status(400).send({
                success:true,
                message:"some error occurred",
                users
            })
        }
    } catch (error) {
        console.log(error)
    }
}