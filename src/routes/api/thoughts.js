const { Router } = require("express");

const {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/api/thoughts");

const {
  createNewReaction,
  deleteReaction,
} = require("../../controllers/api/reactions");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createNewThought);
router.put("/:id", updateThoughtById);
router.delete("/:id", deleteThoughtById);
router.post("/:id/reaction", createNewReaction);
router.delete("/:id/reaction", deleteReaction);

module.exports = router;
