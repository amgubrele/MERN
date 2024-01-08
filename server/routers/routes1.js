const express = require("express");

const router = express.Router();
const authControllers = require("../controllers/auth-controllers");

// -----------------------------------------------------routes--------------------------------------->>>
//    ..............................................
router.route("/").get(authControllers.home);
//    ..............................................
router
  .route("/regester")
  .get(authControllers.regester)
  .post(authControllers.regester);

router.route("/login").get(authControllers.login).post(authControllers.login);

module.exports = router;
