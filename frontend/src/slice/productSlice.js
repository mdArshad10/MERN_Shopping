/** @format */

import { PRODUCT_URL } from "../constent.js";
import { sliceAPI } from "./apiSlice.js";

export const productSlice = sliceAPI.injectEndpoints({
	endpoints: (builder) => ({
		products: builder.query({
			query: () => `${PRODUCT_URL}/getAll`,
		}),
		particularProduct: builder.query({
			query: (Id) => `${PRODUCT_URL}/${Id}`,
		}),
	}),
});

export const { useProductsQuery, useParticularProductQuery } = productSlice;
