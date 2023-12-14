/** @format */

import app from "./app.js";
import colors from "colors";
import { config } from "dotenv";
import connectDB from "./db/connectDB.js";

// dotenv config
config({ path: "./.env" });

const port = process.env.PORT || 3000;
connectDB()
	.then(() => {
		// app listen
		app.listen(port, () => {
			console.log(`the server is running at ${port}`);
		});
		app.on("error", (error) => {
			console.log(`the some error on server ${error}`.red.inverse);
		});
	})
	.catch((error) => {
		console.log(`ERROR on app.listen => ${error}`.red.inverse);
	});
