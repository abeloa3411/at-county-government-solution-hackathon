import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  phone: String,
  time: {
    type: Date,
    default: Date.now,
  },
  issue: String,
  recording: String,
});

const Model = mongoose.model("Model", tableSchema);

export default Model;
