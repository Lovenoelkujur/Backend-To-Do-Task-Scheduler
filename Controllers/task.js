const taskModel = require("../Models/task");


// Get All Task
const getAllTask = async(req, res) => {
    try {

        // Fetch all Data
        const taskData = await taskModel.find();

        res.status(200).json({
            success : true,
            message : "Task list fetch Successfully.",
            taskData,
        });
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "Something went wrong ! Try Again Later !",
            error : error.message,
        });
    }
}

// Create New Task
const createTask = async(req, res) => {
    try {

        // Extract task data from the request body
        const {taskDate, taskName, taskDescription} = req.body;
        // console.log(taskName, taskDescription, taskDate);

        // Create a new task instance
        const newTask = taskModel({
            taskDate,
            taskName,
            taskDescription,
        });

        // Save the New Task to the Database
        const saveTask = await newTask.save();

        res.status(200).json({
            success : true,
            message : "Task Created Successfully.",
            task : saveTask,
        });
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "Something went wrong ! Try Again Later !",
            error : error.message,
        });
    }
}

// Update Task by ID
const updateTask = async(req, res) => {
    try {
        
        // Get the task ID and update data
        const taskId = req.params.id;
        const taskData = req.body;
        // console.log(taskId, taskData);

        // Find and Update a Task
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, taskData, {new : true});

        // Condition for Task Not found
        if(!updatedTask){
            return res.status(404).json({
                success : false,
                message : "Task Not Found !",
            });
        }
        
        res.status(200).json({
            success : true,
            message : "Task Updated Successfully.",
            task : updatedTask,
        });
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "Something went wrong ! Try Again Later !",
            error : error.message,
        });
    }
}

// Delete Task by ID
const deleteTask = async(req, res) => {
    try {

        // Get ID from user
        const taskId = req.params.id;
        // console.log(taskId);

        const deletedTask = await taskModel.findByIdAndDelete(taskId);

        // Condition for Task Not found
        if(!deletedTask){
            return res.status(404).json({
                success : false,
                message : "Task Not Found !"
            });
        }
        
        res.status(200).json({
            success : true,
            message : "Task Deleted Successfully.",
        });
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "Something went wrong ! Try Again Later !",
            error : error.message,
        });
    }
}

const taskContainer = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
};

module.exports = taskContainer;