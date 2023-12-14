import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Product = ({product:{_id, image, name, price}}) => {
  return (
    <Card>
      <Link to={`/product/${_id}`}>
        <Card.Img variant="top" src={`${image}`} />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="h3">${price}</Card.Text>
    </Card>
  );
};

export default Product;
