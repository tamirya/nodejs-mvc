module.exports = (req, res, next) => {
  console.log("auth middleware is working");
  next();
};
