const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/task");
const cors = require("cors");
const databaseConnection = require("./Utils/database");
const scheduleTask = require("./Utils/scheduler");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());

// Main Route
app.use("/api/v1", router);

// Cors
app.use(
    cors({
        origin : "http://localhost:5173",
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


// DB Connection
databaseConnection();

// Task Scheduler
scheduleTask();

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})