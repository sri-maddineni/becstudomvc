import express from "express";


import Jwt from "jsonwebtoken";
import QPaperModel from "../models/QPaperModel.js";

export const CreateQpaper = async (req, res) => {
    try {
        const { sub, code, link, dept } = req.body;

        if (!sub) {
            return res.send({ message: "sub is required" });
        }

        if (!code) {
            return res.send({ message: "code is required" });
        }

        if (!link) {
            return res.send({ message: "link is required" });
        }

        if (!dept) {
            return res.send({ message: "dept no is required" });
        }

        const subject = await new QPaperModel({
            sub,
            code,
            dept,
            link,
        }).save();

        res.status(201).send({
            success: true,
            message: "subject added successfully",
            subject,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in adding subject",
            error,
        });
    }
};



export const getPapersController=async(req,res)=>{
    try {
        const papers=await QPaperModel.find()
        if(papers){
            return res.status(201).send({
                success:true,
                papers,
                message:"success"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"something wrong ocured"
        })
    }
}



