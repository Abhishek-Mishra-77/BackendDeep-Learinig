import { Book } from "../models/BookModel.js";

const addBook = async (req, res) => {
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
};

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

const removeBook = async (req, res) => {
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
};

const singleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: error.message });
  }
};

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

export { getBooks, addBook, removeBook, singleBook, updateBook };
