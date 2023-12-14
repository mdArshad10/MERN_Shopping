/** @format */

import connectDB from "./db/connectDB.js";
import { Order } from "./models/order.model.js";
import { Product } from "./models/product.model.js";
import { User } from "./models/user.model.js";
import dotenv from "dotenv";
import { products } from "./data/products.js";
import { users } from "./data/user.js";
import colors from "colors";

dotenv.config({path:'./.env'})

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createUser = await User.insertMany(users);
		const userAdmin = createUser[0]._id;
		const sampleProduct = products.map((product) => {
			return { ...product, user: userAdmin };
		});

		await Product.insertMany(sampleProduct);
		console.log(`data import successfully`.green.inverse);
	} catch (error) {
		console.log(`Error in Importing Data`.red.inverse, error);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		console.log(`data destroy successfully`.green.inverse);
	} catch (error) {
		console.log(`Error in destroy Data`.red.inverse, error);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
