const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const sendEmail = async(to, subject, text) => {
    try {
        console.log(`Attempting to send email to: ${to}, Subject: ${subject}`); 
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com', // Replace with your provider's SMTP server
            port: 465, // Port may vary depending on your provider
            secure: true, // Use true for TLS, false for non-TLS (consult your provider)
            auth: {
              user: process.env.EMAIL_USERNAME, // Replace with your email address
              pass: process.env.EMAIL_PASSWORD // Replace with your email password
            }
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USERNAME, // Replace with your email address
            to , // Replace with the recipient's email address
            subject , // Replace with your desired subject
            text, // Plain text content 
        };

        // Send the email
        // await transporter.sendMail(mailOptions);
        // console.log("Email sent successfully!");
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error.message);
            console.error("Error details:", error);
        }
  
    } catch (error) {
        console.log("Error sending email:", error);
    }
}

module.exports = sendEmail;