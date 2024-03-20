import { Router } from "express";
const router = Router();

import addBook from "../Controllers/addBook.js";
import getBooks from "../Controllers/getBooks.js";
import removeBook from "../Controllers/removeBook.js";
import singleBook from "../Controllers/singleBook.js"
import updateBook from "../Controllers/updateBook.js";

router.post('/' , addBook);
router.get('/get' , getBooks);
router.get('/single/:id' , singleBook);
router.delete("/remove/:id" , removeBook);
router.put("/update/:id" , updateBook);


export default router;