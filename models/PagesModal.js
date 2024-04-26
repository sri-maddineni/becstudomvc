import mongoose from "mongoose";


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




// const TechieSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         name: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         imglink: {
//             type: String,
//             required: true,
//         },
//         profile: {
//             type: String,
//             required: true,
//         },
//         des: {
//             type: String,
//             required: true,
//         },

//     },
//     { timestamps: true }
// );



export const CompanyModel = mongoose.model("Companies", CompanySchema);
// export const TechieModel = mongoose.model("Techies", TechieSchema);