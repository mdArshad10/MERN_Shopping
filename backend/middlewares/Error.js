/** @format */

const NotFound = (req, res, next) => {
	const error = new Error(`NOT FOUND - ${req.originalUrl}`);
	console.log(error.stack);
	res.status(404);
	next(error);
};

const ErrorMiddleware = (err, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	if (err.name === "CastError" && err.kind === "ObjectId") {
		statusCode = 404;
		message = "Resource not found";
	}
	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === "production" ? "🎂" : err.stack,
	});
};

export { NotFound, ErrorMiddleware };
