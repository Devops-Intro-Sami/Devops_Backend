// Middleware to handle errors centrally
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Customize response based on error properties
  const statusCode = err.statusCode || 500;
  const message = err.message || "An unexpected error occurred";

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
