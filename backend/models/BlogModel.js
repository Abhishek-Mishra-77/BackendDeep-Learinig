import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: "User",
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);

