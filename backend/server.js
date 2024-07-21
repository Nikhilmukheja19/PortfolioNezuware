const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection:false,
  auth: {
    user: "nikhilmukheja1@gmail.com",
    pass: "kzwt dopx kxwq hkmi",
    }, 
    tile: {
      rejectUnAuthorized:true
  }
});

app.post("/send-message", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "nikhilmukheja1@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Message sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
