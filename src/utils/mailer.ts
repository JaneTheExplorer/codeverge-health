// server/mailer.ts

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Codeverge Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Codeverge!',
      html: `
        <h2>Welcome, ${name}!</h2>
        <p>Thanks for signing up to Codeverge Hospital System.</p>
        <p>We're excited to have you onboard.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(`Failed to send email to ${email}:`, error);
    throw error;
  }
};
