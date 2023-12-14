/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASIC_URL } from "../constent.js";

export const sliceAPI = createApi({
	reducerPath: "sliceAPI",
	tagTypes: ["Product", "User", "Order"],
	baseQuery: fetchBaseQuery({ baseUrl: BASIC_URL }),
	endpoints: () => ({}),
});
