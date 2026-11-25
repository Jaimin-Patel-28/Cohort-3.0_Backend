const NoteModel = require("../models/notes.model");

const createNoteController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await NoteModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created",
      data: newNote,
    });
  } catch (error) {
    console.log("Error in creation", error);
  }
};

const readNoteController = async (req, res) => {
  try {
    const allNotes = await NoteModel.find();
    return res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("Error in updation", error);
  }
};
const readSingleNoteController = async (req, res) => {
  try {
    let noteID = req.params.id;

    const note = await NoteModel.findById(noteID);

    return res.status(200).json({
      message: "Note fecthed",
      data: note,
    });
  } catch (error) {
    console.log("Error while fetch note", error);
  }
};

const updateNoteController = async (req, res) => {
  try {
    let noteID = req.params.id;
    let body = req.body;

    let updateNote = await NoteModel.findByIdAndUpdate(noteID, body, {
      new: true,
    });

    return res.status(201).json({
      message: "Note updated",
      data: updateNote,
    });
  } catch (error) {
    console.log("Error in updation", error);
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteID = req.params.id;
    let deleteNote = await NoteModel.findByIdAndDelete(noteID);

    return res.status(200).json({
      message: "Note deleted",
      data: deleteNote,
    });
  } catch (error) {
    console.log("Error while deleting", error);
  }
};

module.exports = {
  createNoteController,
  readNoteController,
  readSingleNoteController,
  updateNoteController,
  deleteNoteController,
};
