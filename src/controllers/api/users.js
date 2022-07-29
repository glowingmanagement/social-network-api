const { User } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[Error]: Failed to get all bikes | ${error.message}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[Error]: Failed to get all bikes | ${error.message}`);
  }
};

const createNewUser = async (req, res) => {
  try {
    const { userName, email } = req.body;

    if (userName && email) {
      await User.create({ userName, email });
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        error: `Please enter valid username and email`,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create new user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateUserById = async (req, res) => {
  return res.send("updateUser");
};

const deleteUserById = async (req, res) => {
  return res.send("deleteUser");
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
