import { Router } from "express";
const router = Router();

import { signUp } from "../Controllers/Auth.js";

router.post("/", signUp);

export default router;
