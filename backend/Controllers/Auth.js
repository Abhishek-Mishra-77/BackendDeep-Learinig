import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({
        message: "Please feel all the fields , username , email , password",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username: username,
      email: email,
      password: hashedPassword,
    };

    const result = await User.create(newUser);

    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const signIn = async (req, res) => {};

export { signUp, signIn };
