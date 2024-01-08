const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
//----------------------------------------------------------------------homelogic------------------------------------>>>

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to the mern website from router");
  } catch (e) {
    console.log(e);
  }
};

//----------------------------------------------------------------------regestration logic--------------------------------------------->>
const regester = async (req, res) => {
  try {
    const userData = new userModel(req.body);
    const userExisting = await userModel.findOne({ email: userData.email });

    console.log(userData._id);

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
    console.log(e);
    return res.status(400).send(e);
  }
};

// ---------------------------------------------------------------------login---------------->>>
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExisting = await userModel.findOne({ email: email });
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
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = { home, regester, login };
