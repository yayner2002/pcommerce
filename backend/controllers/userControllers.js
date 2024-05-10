import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  const user = {
    username,
    email,
    password,
    isAdmin,
  };

  try {
    await User.create(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, registerUser };
