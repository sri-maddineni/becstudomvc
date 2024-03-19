import mongoose from "mongoose";

const ProposalSchema = new mongoose.Schema({
  // Define any fields specific to the proposal if needed
  // For example:
  proposalId: {
    type: mongoose.ObjectId,
    ref: "users",
    required: true
  }
});

const userSchema = new mongoose.Schema(
  {
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
    
    role: {
      type: String,
      default: '1', // Assuming role is a string
    },
  },
  { timestamps: true }
);



export default mongoose.model("users", userSchema);
