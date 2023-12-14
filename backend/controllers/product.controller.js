/** @format */

import { AsyncHandler } from "../middlewares/asycHandler.js";
import { Product } from "../models/product.model.js";

// @Desc: get all the product
// @Method: [GET]      api/v1/product/getAll
// @Access:public
const getAllProducts = AsyncHandler(async (req, res, next) => {
	const products = await Product.find();
	res.status(200).json({
		message: "successfully get all product",
		products,
		success: true,
	});
});

// @Desc: get all the product
// @Method: [GET]      api/v1/product/:id
// @Access:public
const particularProduct = AsyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const existProduct = await Product.findById(id);

	if (!existProduct) return next(new Error("product is not exist"));

	res.status(200).json({
		message: "successfully get a particular product ",
		product: existProduct,
		success: true,
	});
});

export { getAllProducts, particularProduct };
