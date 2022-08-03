const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Get env variables
const email = process.env.EMAIL
const emailPassword = process.env.EMAIL_PASSWORD


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: process.env.type,
        user: process.env.EMAIL,
        serviceClient: "113600000000000000000",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...",
        accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
        expires: 1484314697598,
    },
    });
  
contactEmail.verify((error) => {
if (error) {
    console.log(error);
} else {
    console.log("Ready to Send");
}
});