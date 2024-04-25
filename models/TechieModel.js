import mongoose from "mongoose";


const TechieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imglink: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);



export default mongoose.model("Techies", TechieSchema);
