import express from "express";
import expressAsyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import { isAuth } from "../utils.js";

const bookRouter = express.Router();

bookRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.send(books);
  })
);

bookRouter.post(
  "/createBook",
  expressAsyncHandler(async (req, res) => {
    try {
      const book = new Book({
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4,
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        yearPublish: req.body.yearPublish,
        condition: req.body.condition,
        singleStock: req.body.singleStock,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
      });
      const createdBook = await book.save();

      res.status(200).json({
        message: "New listing created successfully",
        book: createdBook,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
);

bookRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const deleteBook = await book.deleteOne();
      res.status(200).json({
        message: "Listing Deleted Successfully",
        activity: deleteBook,
      });
    } else {
      res.status(404).json({ message: "Book Not Found" });
    }
  })
);

bookRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        book.image1 = req.body.image1;
        book.image2 = req.body.image2;
        book.image3 = req.body.image3;
        book.image4 = req.body.image4;
        book.title = req.body.title;
        book.author = req.body.author;
        book.ISBN = req.body.ISBN;
        book.yearPublish = req.body.yearPublish;
        book.condition = req.body.condition;
        book.singleStock = req.body.singleStock;
        book.quantity = req.body.quantity;
        book.price = req.body.price;
        book.description = req.body.description;

        const updatedBook = await book.save();
        res.status(200).json({
          message: "Book Updated Successfully",
          activity: updatedBook,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

bookRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.send(book);
    } else {
      res.status(404).send({ message: "Book Not Found" });
    }
  })
);

export default bookRouter;
