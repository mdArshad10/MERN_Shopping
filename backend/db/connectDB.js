/** @format */

import mongoose from "mongoose";
import { dbName } from "../constant.js";

const connectDB = async () => {
	try {
		const dbInstance = await mongoose.connect(
			`${process.env.MONGO_URL}/${dbName}`,
			{ useNewUrlParser: true }
		);
		console.log(
			`the database is connected at ${dbInstance.connection.port}`.green
				.inverse
		);
	} catch (error) {
		console.log(`Database have some error ${error}`.red.inverse);
		process.exit(1);
	}
};

export default connectDB;
