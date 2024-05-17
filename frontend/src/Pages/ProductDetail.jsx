import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const [singleProd, setSingleProd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async (productId) => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/" + productId
        );

        if (!res.ok) {
          // throw new Error("Failed to Fetch products.");
          toast.error("Failed to Fetch products.");
        }

        const products = await res.json();
        setSingleProd(products);

        // set loading to false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        // set loading to false
        setIsLoading(false);
      }
    };

    fetchProducts(productId);
  }, [productId]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {" "}
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={singleProd.image} alt={singleProd.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{singleProd.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>Price: ${singleProd.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {singleProd.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${singleProd.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {singleProd.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={singleProd.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
