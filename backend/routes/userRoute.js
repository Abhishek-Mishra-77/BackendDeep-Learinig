import { Router } from "express";
const router = Router();

import { signUp, signIn, getUsers, removeUser,updateUser } from "../Controllers/Auth.js";

router.get("/", getUsers);
router.post("/signup", signUp);
router.get("/signin", signIn);
router.delete("/remove/:id", removeUser);
router.put("/update/:id" , updateUser);

export default router;
