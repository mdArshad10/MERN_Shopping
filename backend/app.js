/** @format */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// error handler
import {ErrorMiddleware,NotFound} from './middlewares/Error.js'

// rest obj
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(morgan("dev"));
app.use(helmet());

// import Router
import productRoute from './routes/product.route.js'

// router middleware
app.use('/api/v1/product', productRoute);

// not found page
app.use(NotFound)
app.use(ErrorMiddleware)

// export app
export default app;
