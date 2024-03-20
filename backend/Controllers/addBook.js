import { Router } from "express";
import { Book } from "../models/BookModel.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, author, year } = req.body;
    if (!name || !author || !year) {
      return res.status(400).send({
        massage: "Send all required field : name , author , year",
      });
    }

    const newBook = {
      name: name,
      author: author,
      year: year,
    };

    const result = await Book.create(newBook);
    return res.status(201).send(result);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
});

export default router;
