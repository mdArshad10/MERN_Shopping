/** @format */
import bcrypt from "bcryptjs";

export const users = [
	{
		username: "arshad",
		email: "arshad@gmail.com",
		password: bcrypt.hashSync("1234", 10),
		isAdmin: true,
	},
	{
		username: "ename",
		email: "ename@gmail.com",
		password: bcrypt.hashSync("1234", 10),
		isAdmin: true,
	},
	{
		username: "aftab",
		email: "aftab@gmail.com",
		password: bcrypt.hashSync("1234", 10),
		isAdmin: true,
	},
	{
		username: "talib",
		email: "talib@gmail.com",
		password: bcrypt.hashSync("1234", 10),
		isAdmin: true,
	},
];
