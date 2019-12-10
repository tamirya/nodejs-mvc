module.exports = (req, res, next) => {
  console.log("logger middleware is working");
  next();
};
