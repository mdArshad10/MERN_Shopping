/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { sliceAPI } from "./slice/apiSlice.js";

const store = configureStore({
	reducer: {
		[sliceAPI.reducerPath]: sliceAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sliceAPI.middleware),
	devTools: true,
});

export default store;
