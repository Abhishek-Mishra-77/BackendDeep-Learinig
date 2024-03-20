import { Book } from "../models/BookModel.js";

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, year } = req.body;

    if (!name || !author || !year) {
      return res.status(400).send({ message: "Please update all fields" });
    }

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(400).send({ message: error.message });
    }

    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export default updateBook;
