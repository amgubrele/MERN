const chalk = require("chalk");

const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 50;
  const message = err.message || "backend err";
  const extradetails = err.extraDetails;
 return res.status(status).send({ message, extradetails });


};

module.exports = errorMiddleware;
