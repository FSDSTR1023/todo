const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const status = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
};

const taskSchema = new Schema(
  {
    id: Number,
    title: String,
    description: String,
    status: {
      type: String,
      enum: [status.PENDING, status.IN_PROGRESS, status.DONE],
    },
    dateStart: Date,
    dateEnd: Date,
    user: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", taskSchema);
