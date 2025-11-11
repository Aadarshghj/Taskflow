import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Enter the Name"] },
    email: { type: String, required: [true, "Enter the Email"], unique: true },
    password: { type: String, required: [true, "Enter the Password"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
