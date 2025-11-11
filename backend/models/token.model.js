import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "User" 
  },
  token: { 
    type: String, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 604800 // 7 days = 7 * 24 * 60 * 60 seconds
  }
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
