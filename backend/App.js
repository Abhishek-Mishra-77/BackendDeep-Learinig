import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Db from "./db/db.js";

import routes from "./routes/routes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

Db();

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
