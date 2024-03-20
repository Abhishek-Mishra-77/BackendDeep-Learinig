import { Router } from "express";
const router = Router();

import { postBlog } from "../Controllers/Blog.js";

router.post("/postBlog", postBlog);

export default router;
