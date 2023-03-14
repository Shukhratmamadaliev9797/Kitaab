import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    password: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);
export default User;
