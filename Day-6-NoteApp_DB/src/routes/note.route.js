const express = require("express");
const {
  createNoteController,
  readNoteController,
  updateNoteController,
  readSingleNoteController,
  deleteNoteController,
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/create", createNoteController);

router.get("/read", readNoteController);
router.get("/:id", readSingleNoteController);

router.put("/update/:id", updateNoteController);

router.delete("/delete/:id", deleteNoteController);

module.exports = router;
