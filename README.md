# To-Do Task: Task Scheduler Using Node's Cron Jobs

---
## Overview
This project is a Task Scheduler application built with Node.js, Express, and MongoDB. It enables users to create, update, delete, and retrieve tasks while scheduling automated reminders for incomplete tasks based on their deadlines. Emails are sent using Nodemailer, and task scheduling is managed using node-cron.
---

## Features

* Task Management:

    * Create, read, update, and delete tasks via API endpoints.

    * Tasks include a deadline (taskDate), a name, a description, and a completion status.

* Automated Email Reminders:

    * Sends email reminders for incomplete tasks due on the current date.

    * Scheduled to run daily at 6:30 PM.

* Database Integration:

    * Tasks are stored and managed in a MongoDB database.

* Environment Configuration:

    * Use .env to securely manage sensitive configurations like database connection strings and email credentials.

---

## Prerequisites
Make sure you have the following installed:

Node.js
MongoDB

---

## Folder Structure

```bash
.
├── Controllers
│   └── task.js        # Task logic (CRUD)
├── Models
│   └── task.js        # Task schema
├── Routes
│   └── task.js        # Task API routes
├── Utils
│   ├── database.js    # Database connection
│   ├── scheduler.js   # Task scheduling logic
│   └── sendEmail.js   # Email sending logic
├── .env               # Environment variables
├── app.js             # Main application entry point
├── package.json       # Project dependencies
```

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Lovenoelkujur/Backend-To-Do-Task-Scheduler.git
cd task-scheduler
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory and add the following:
```env
PORT=9000
DB_CONNECTION=your_mongo_db_connection_string
EMAIL_USERNAME=your_email@example.com
EMAIL_PASSWORD=your_email_password
MAIL_RECIVE=recipient_email@example.com
```

4. Start the server:
```bash
npm start
```

The server will run on http://localhost:9000.

---

## API Endpoints

### `Base URL: /api/v1`

1. Get All Tasks

    * Endpoint: /all-task-list
    * Method: GET
    * Response:
    ```json
    {
    "success": true,
    "message": "Task list fetched successfully.",
    "taskData": [...]
    }
    ```

2. Create a New Task

    * Endpoint: /create-task
    * Method: POST
    * Body:
    ```json
    {
    "taskDate": "YYYY-MM-DD",
    "taskName": "Your Task Name",
    "taskDescription": "Your Task Description"
    }
    ```

    * Response
    ```json
    {
    "success": true,
    "message": "Task created successfully.",
    "task": {...}
    }
    ```

3. Update Task by ID
    * Endpoint: /update-task/:id
    * Method: PUT
    * Body:
    ```json
    {
    "taskName": "Updated Task Name",
    "taskDescription": "Updated Task Description",
    "isCompleted": true
    }
    ```
    * Response:
    ```json
    {
    "success": true,
    "message": "Task updated successfully.",
    "task": {...}
    }
    ```

4. Delete Task by ID

    * Endpoint: /delete-task/:id
    * Method: DELETE
    * Response:
    ```json
    {
    "success": true,
    "message": "Task deleted successfully."
    }
    ```
---

## Scheduler Functionality

* The task scheduler runs every day at `6:30 PM`.

* It checks for incomplete tasks due on the current date.

* If tasks are found, it sends an email reminder to the configured recipient.

---

## Technologies Used

* Node.js: Backend framework.

* Express: Web server framework.

* MongoDB: Database for task storage.

* Nodemailer: Email service for reminders.

* node-cron: Scheduler for automated tasks.

---

## Improvements and Suggestions

* Add a frontend interface to manage tasks visually.

* Enable email configuration through the UI.

* Extend scheduling options for custom intervals.

---

## License
This project is open-source and available under the MIT License.