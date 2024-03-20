import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Db from "./db/db.js";

import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

Db();

app.use("/", bookRoute);
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
