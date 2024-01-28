const userModel = require("../model/constactModel");
const bcrypt = require("bcrypt");
const chalk = require("chalk");

const contactForm = async (req, res) => {
  try {
    res.status(201).json(req.body);
  } catch (e) {
    const err = {
      status: 400,
      message: "there is an err in contact form",
    };
  }
};

module.exports = contactForm;
