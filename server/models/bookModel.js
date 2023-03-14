import mongoose from "mongoose";

const bookScheme = new mongoose.Schema(
  {
    image1: { type: String, required: false },
    image2: { type: String, required: false },
    image3: { type: String, required: false },
    image4: { type: String, required: false },
    title: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: String, required: true },
    yearPublish: { type: Number, required: true },
    condition: { type: String, required: true },
    singleStock: { type: String, required: true },
    quantity: { type: Number, required: false, default: 1 },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookScheme);
export default Book;
