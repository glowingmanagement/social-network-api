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

module.exports = { getAllUsers, getUserById };
