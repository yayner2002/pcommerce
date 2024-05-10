// import products from "../products.js";
import Product from "../components/Product.jsx";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // get request to http://localhost:5000/api/products

    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const products = await res.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);
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
