const cron = require("node-cron");
const dotenv = require("dotenv");
const taskModel = require("../Models/task");
const sendEmail = require("./sendEmail");

dotenv.config();

const scheduleTask = () => {
    // Schedule to run every at 6:30pm(18:30)hr
    cron.schedule("30 18 * * *", async () => {
        console.log("Running Scheduled Task...");

        try {
            // Fetch all tasks that are incomplete
            const tasks = await taskModel.find({ isCompleted: false });
            // console.log("Tasks fetched:", tasks.length);  // Log number of tasks fetched

            tasks.forEach(async (task) => {
                const currentDate = new Date().toISOString().split("T")[0];
                // console.log("Task Date:", task.taskDate, "Current Date:", currentDate);  // Log task date

                if (task.taskDate === currentDate) {
                    console.log(`Sending email for task: ${task.taskName}`);  // Log email intent

                    // Try sending email and log success/failure
                    try {
                        await sendEmail(
                            process.env.MAIL_RECIVE,
                            `Reminder: ${task.taskName}`,
                            `Task: ${task.taskDescription}`
                        );
                        console.log(`Email sent successfully for task: ${task.taskName}`);
                    } catch (error) {
                        console.error(`Failed to send email for task: ${task.taskName}`, error.message);
                    }
                }
            });

        } catch (error) {
            console.error("Error fetching tasks or sending emails:", error.message);
        }
    });
};


module.exports = scheduleTask;