const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
