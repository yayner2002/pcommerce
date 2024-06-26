/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product.id}`}>
        <Card.Img variant="top" src={`${product.image}`} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
