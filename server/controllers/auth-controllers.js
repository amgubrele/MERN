const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const chalk = require("chalk");

//----------------------------------------------------------------------homelogic------------------------------------>>>

const home = async (req, res, next) => {
  try {
    res.status(200).send("welcome to the mern website from router");
  } catch (e) {
    console.log(e);
    const err = {
      status: 400,
    };
    next(err);
  }
};

//----------------------------------------------------------------------regestration logic--------------------------------------------->>
const regester = async (req, res, next) => {
  try {
    const userData = new userModel(req.body);
    const userExisting = await userModel.findOne({ email: userData.email });

    if (userExisting) {
      return console.log(
        "user already exist !!",
        res.send("user already exist !!")
      );
    } else if (userData.password !== userData.confirmpassword) {
      return res.send("passoword dont match");
    } else {
      await userData.save();
      res.status(201).json({
        message: "usercreated👍🥰...",
        userId: userData._id.toString(),
        tocken: await userData.generateAuthTocken(),
      });
    }
  } catch (e) {
    console.log(chalk.red("message: ") + e.message);
    const err = {
      status: 400,
      message: e.message,
      extraDetails: "this error is because of invalid input",
    };
    next(err);
  }
};

// ---------------------------------------------------------------------login---------------->>>
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExisting = await userModel.findOne({ email: email });
    const tocken = userExisting.generateAuthTocken();

    if (!userExisting) {
      console.log("user dosent exist");
      return res.status(401).send("invalid credentials");
    }
    const compare = bcrypt.compare(password, userExisting.password);

    if (compare) {
      res.status(201).send(email + "you are logged in ");
    } else {
      console.log("wrong password");
      res.send(401).send("wrong password");
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

module.exports = { home, regester, login };
