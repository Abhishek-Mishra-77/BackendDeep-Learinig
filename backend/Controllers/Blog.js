import { Blog } from "../models/BlogModel.js";

const postBlog = async (req, res) => {
  try {
    const { title, content, author, likes } = req.body;

    if (!title || !content || !author || !likes) {
      return res.status(401).send({
        message: "Please feel all the fields title , content , author , likes",
      });
    }

    const newBlog = {
      title: title,
      content: content,
      author: author,
      likes: likes,
    };

    const result = await Blog.create(newBlog);

    if (!result) {
      return res.status(401).send({
        message: "Something went wrong please try after sometime",
      });
    }

    return res.status(200).send(result);
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export { postBlog };
