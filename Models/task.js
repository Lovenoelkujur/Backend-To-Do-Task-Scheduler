const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskDate : {
        type : String,
        required : true,
    },
    taskName : {
        type : String,
        required : true,
    },
    taskDescription : {
        type : String,
        required : true,
    },
    isCompleted : {
        type : Boolean,
        default : false,
    },
});

const taskModel = mongoose.model("Tasks", taskSchema);

module.exports = taskModel;