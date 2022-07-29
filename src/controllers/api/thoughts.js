const { Thoughts } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const users = await Thoughts.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[Error]: Failed to get all bikes | ${error.message}`);
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Thoughts.findById(id);

    if (!user) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[Error]: Failed to get all bikes | ${error.message}`);
  }
};

const createNewThought = async (req, res) => {
  return res.send("createThought");
};

const updateThoughtById = async (req, res) => {
  return res.send("updateThought");
};

const deleteThoughtById = async (req, res) => {
  return res.send("deleteThought");
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
};
