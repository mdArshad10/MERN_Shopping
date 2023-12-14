/** @format */

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product/Product.jsx";
import { useProductsQuery } from "../slice/productSlice.js";
import Loader from "../components/Spinner/Loader.jsx";
import Message from "../components/message/Message.jsx";

const HomeScreen = () => {

	const { data, isLoading, error } = useProductsQuery();
  
	return (
		<>
			{isLoading ? (
				<Loader/>
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<h1>Latest Products</h1>
					<Row>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default HomeScreen;

// <h1>Latest Product</h1>
// <Row>
//   {data.products.map((product) => (
//     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//       <h3>{product.name}</h3>
//       <Product product={product} />
//     </Col>
//   ))}
// </Row>
