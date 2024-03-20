import mongoose from "mongoose";

const Db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to mongodb"))
    .catch((error) => console.log("Mongo connection error " + error.message));
};

export default Db;
