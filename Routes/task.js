const express = require("express");
const taskContainer = require("../Controllers/task");

const router = express.Router();

// Get All Task List
router.get("/all-task-list", taskContainer.getAllTask);

// Create a New Task
router.post("/create-task", taskContainer.createTask);

// Update Task by ID
router.put("/update-task/:id", taskContainer.updateTask);

// Delete task by ID
router.delete("/delete-task/:id", taskContainer.deleteTask);

module.exports = router;