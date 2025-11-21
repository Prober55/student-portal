import express from "express";
import { Assignment } from "../models/Assignment.js";

const router = express.Router();
router.post("/add", async (req, res) => {
  try {
    const { title, courseCode, dueDate, status, userId } = req.body;
    const newAssignment = new Assignment({
      title,
      courseCode,
      dueDate,
      status,
      userId
    });

    await newAssignment.save();
    res.json({ message: "Assignment added", assignment: newAssignment });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
