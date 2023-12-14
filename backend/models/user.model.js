/** @format */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
