const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Minimum 20 character are require"],
  },
});

const NoteModel = mongoose.model("notes", noteSchema);
module.exports = NoteModel;
