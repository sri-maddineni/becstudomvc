import { CompanyModel } from "../models/PagesModal.js"
import TechieModel from "../models/TechieModel.js"


export const getTechiesController=async(req,res)=>{
    try {
        const result = await TechieModel.find().sort({title:1})
        if(result){
            return res.status(200).send({
                success:true,
                message:"success",
                result
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const getCompaniesController = async(req,res)=>{
    try {
        const result = await CompanyModel.find()
        if(result){
            return res.status(200).send({
                success:true,
                message:"success",
                result
            })
        }
    } catch (error) {
        console.log(error)
    }
}