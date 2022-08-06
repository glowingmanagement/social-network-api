const { User } = require("../../models");

const createNewFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  console.log(req.params);

  try {
    if (userId && friendId) {
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true, runValidators: true }
      );
      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(`[ERROR]: Failed to add new friend | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteFriend = (req, res) => {
  const { id } = req.params;
};

module.exports = { createNewFriend, deleteFriend };
