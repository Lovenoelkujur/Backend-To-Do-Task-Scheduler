const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/task");
const cors = require("cors");
const databaseConnection = require("./Utils/database");
const scheduleTask = require("./Utils/scheduler");

const app = express();

dotenv.config();

const PORT = 10000;

// Cors
app.use(
    cors({
        origin : "http://localhost:5173",
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// Middleware
app.use(express.json());

// Main Route
app.use("/api/v1", router);


// DB Connection
databaseConnection();

// Task Scheduler
scheduleTask();

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})