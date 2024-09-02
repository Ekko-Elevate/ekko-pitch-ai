"use server";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export async function sendemail(formdata) {
  
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASSWORD);
    const formValues = {};

    for (let [key, value] of formdata.entries()) {
        formValues[key] = value;
    }

    const { name, email, textarea } = formValues;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
        },
    });

    let mailOptionsus = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: `Contact form submission from ${name}, ${email}`,
        text: textarea,
    };

    let mailOptionsthem = {
        from: process.env.EMAIL_USER,
        to: email, 
        subject: 'Contact form confirmation',
        text: `Hello,

Thank you for contacting the Ekko help desk. This email is an automated message to acknowledge receipt of your email. We will return your email as soon as possible, this may be up to 3 business days.

Sincerely,
Ekko support services`,
    };

    await transporter.sendMail(mailOptionsus);
    await transporter.sendMail(mailOptionsthem);
}
