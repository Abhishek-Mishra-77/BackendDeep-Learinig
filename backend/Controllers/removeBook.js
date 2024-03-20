import { Router } from "express";
import { Book } from "../models/BookModel.js";
const router = Router();

router.delete("/remove/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).send({ message: "Id not found" });
    }
    return res.status(200).send({
      message: "Book deleted Succesfully done",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: error.message });
  }
});

export default router;
