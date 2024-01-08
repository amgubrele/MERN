const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, " This email id is already exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  phone: {
    type: Number,
    required: true,
    unique: [true, "this phone number is already exist"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value) => /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value),
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    },
  },
  confirmpassword: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value) => /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value),
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  Token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthTocken = async () => {
  return await jwt.sign(
    {
      userid: this._id,
      userAdmin: this.isAdmin,
      email: this.email,
    },
    process.env.secretKey,
    {
      expiresIn: "30d",
    }
  );
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = undefined;
  }
  next();
});

//create new collection
const user = new mongoose.model("user", userSchema);

module.exports = user;
