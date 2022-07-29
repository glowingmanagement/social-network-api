const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require("../../controllers/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

router.post("/", createNewUser);

module.exports = router;
