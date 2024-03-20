import { Router } from "express";
import { Book } from "../models/BookModel.js";
const router = Router();

router.get("/single/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: error.message });
  }
});

export default router;
