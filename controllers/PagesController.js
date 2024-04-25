import TechieModel from "../models/TechieModel.js"


export const getTechiesController=async(req,res)=>{
    try {
        const result=await TechieModel.find()
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