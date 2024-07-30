const nodemailer = require('nodemailer');

async function sendMail() {
        // Create a new email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shubhamkrissh88@gmail.com',
                pass: '' // Use environment variables for security
            }
        });

        // Configure the email content
        const mailContent = {
            from: 'shubhamkrissh88@gmail.com',
            to: 'shubhamkrissh89@gmail.com',
            subject: 'Mera naam',
            text: 'Mai tuchi hun or popti bhi'
        };

        // Send mail
        const response = await transporter.sendMail(mailContent);
        console.log('Email sent:');
}

sendMail();
