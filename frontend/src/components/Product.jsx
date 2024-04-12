/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img variant="top" src={`${product.image}`} />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
