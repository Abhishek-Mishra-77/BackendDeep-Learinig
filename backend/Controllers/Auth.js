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

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .send({ message: "Please provide the both email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    return res.status(200).send({ message: "Authentication successfully. " });

    return res.status(200).send({ email, password });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    if (!result) {
      return res.send(401).send({ message: "Something went wrong !" });
    }

    return res.status(200).send(result);
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res
        .status(400)
        .send({ message: "Something went wrong please try after some time. " });
    }

    return res.status(200).send({ message: "User Deleted Successfully. " });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { id } = req.params;
    if (!username || !email || !password) {
      return res.status(401).send({
        message: "Something went wrong please try after sometime. ",
      });
    }

    const result = await User.findByIdAndUpdate(id, req.body);
    
    if (!result) {
      return res.status(401).send({
        message: "Please provide all the fields , username , email , password",
      });
    }

    return res.status(200).send({ message: "Update successfully ." });
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export { signUp, signIn, getUsers, removeUser, updateUser };
