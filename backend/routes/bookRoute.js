import { Router } from "express";
const router = Router();

import {
  addBook,
  getBooks,
  singleBook,
  removeBook,
  updateBook,
} from "../Controllers/Book.js";

router.post("/", addBook);
router.get("/get", getBooks);
router.get("/single/:id", singleBook);
router.delete("/remove/:id", removeBook);
router.put("/update/:id", updateBook);

export default router;
