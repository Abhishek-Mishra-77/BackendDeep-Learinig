import { Book } from "../models/BookModel.js";

const getBooks = async (req, res) => {
  try {
    const result = await Book.find({});
    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: error.message });
  }
};

export default getBooks;
