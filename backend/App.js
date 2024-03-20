import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import addBook from "./Controllers/addBook.js";
import getBooks from "./Controllers/getBooks.js";
import getSingleBook from "./Controllers/singleBook.js";
import removeBook from "./Controllers/removeBook.js";
import updateBook from "./Controllers/updateBook.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log("Mongo connection error " + error.message));

app.post("/", addBook);
app.get("/get", getBooks);
app.get("/single/:id", getSingleBook);
app.delete("/remove/:id", removeBook);
app.put("/update/:id", updateBook);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
