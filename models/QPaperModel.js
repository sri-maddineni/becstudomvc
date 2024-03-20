import mongoose from "mongoose";


const QPaperSchema = new mongoose.Schema(
  {
    sub: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    dept: {
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



export default mongoose.model("qpapers", QPaperSchema);
