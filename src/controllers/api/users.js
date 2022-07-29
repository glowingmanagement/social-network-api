const { User } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[Error]: Failed to get all bikes | ${error.message}`);
  }
};

module.exports = { getAllUsers };
