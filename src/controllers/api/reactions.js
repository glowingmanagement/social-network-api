const { Thoughts } = require("../../models");

const createNewReaction = (req, res) => {
  res.send("Create new reaction");
};

const deleteReaction = (req, res) => {
  res.send("Delete reaction");
};

module.exports = { createNewReaction, deleteReaction };
