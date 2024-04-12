import products from "../products.js";
import Product from "../components/Product.jsx";
import { Col, Row } from "react-bootstrap";
const HomePage = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
