import mongoose, { mongo } from "mongoose";

export const CompanySchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true,
        },
        no: {
            type: Number,
            required: true,
            unique: true,
        },
        imglink: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        des: {
            type: String,
            required: true,
        },
        high: {
            type: String,
            required: true,
        },
        low: {
            type: String,
            required: true,
        },
        avg: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
);


// const companySchema = new mongoose.Schema({
//     companyName: {
//         type: String,
//     },
//     salary: {
//         type: Number,
//     },
//     process: {
//         type: String,
//     },
//     role: {
//         type: String
//     }
// });


const studentPlacementSchema = new mongoose.Schema(
    {
        regno: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true

        },
        count: {
            type: String,
            required: true
        },
        sal: {
            type: String,
            required: true
        },
        
    }
)

export const CompanyModel = mongoose.model("Companies", CompanySchema);
export const StuPlaModel = mongoose.model("studentsPlacements", studentPlacementSchema);