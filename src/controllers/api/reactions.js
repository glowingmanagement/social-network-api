const { Thoughts } = require("../../models");

const createNewReaction = async (req, res) => {
  const { id } = req.params;
  const { reactionBody, userName } = req.body;

  try {
    if (reactionBody && userName) {
      await Thoughts.findOneAndUpdate(
        { _id: id },
        { $addToSet: { reactions: { reactionBody, userName } } },
        { new: true, runValidators: true }
      );
      return res.json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to add new reaction | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteReaction = (req, res) => {
  res.send("Delete reaction");
};

module.exports = { createNewReaction, deleteReaction };
