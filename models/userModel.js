import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  salary: Number,
  process: String,
  role: String
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  regno: {
    type: String,
    required: true,
  },
  companies: {
    type: Map,
    of: companySchema
  },
  role: {
    type: String,
    default: '1', // Assuming role is a string
  },
},
{ timestamps: true });

export default mongoose.model("users", userSchema);
