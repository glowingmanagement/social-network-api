const { Router } = require("express");

const {
  createNewFriend,
  deleteFriend,
} = require("../../controllers/api/friends");

const router = Router();

router.post("/", createNewFriend);
router.delete("/:id", deleteFriend);

module.exports = router;
