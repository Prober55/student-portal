import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  title: String,
  courseCode: String,
  dueDate: String,
  status: {
    type: String,
    default: "Pending"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Assignment = mongoose.model("Assignment", AssignmentSchema);
