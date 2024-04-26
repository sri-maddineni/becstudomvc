import TechieModel from "../models/TechieModel.js"
import { CompanyModel } from "../models/PagesModal.js"


export const AddTechieController = async (req, res) => {
    try {
        // Extract data from the request body
        const { title, name, imglink, des, profile, email } = req.body;

        // Create a new instance of TechieModel
        const newTechie = new TechieModel({ title, name, imglink, des, profile, email }).save();

        // Save the new techie to the database

        // Return success response
        res.status(201).json({
            success: true,
            message: "Techie added successfully",
            data: newTechie
        });
    } catch (error) {
        // Handle errors
        console.error("Error adding techie:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add techie",
            error: error.message
        });
    }
};



export const AddCompanyController = async (req, res) => {
    try {
        const { company, no, imglink, high, low, avg, des, link }=req.body
        const data = { company, no, imglink, high, low, avg, des, link }
        const result =await new CompanyModel(data).save();
        if(result){
            return res.status(200).send({
                success:true,
                message:"done ",
                result
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}
