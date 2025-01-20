const express = require("express");
const timeString = require("../display/timeString");
const dateString = require("../display/dateString");

const contactRouter = express.Router();

let submittedData = { name: " ", email: " "};

contactRouter.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", time: timeString(), date: dateString() })
});

contactRouter.post("/contact", (req, res) => {
  submittedData.name = req.body.name;
  submittedData.email = req.body.email;
  res.redirect("/");
});

module.exports = contactRouter;

