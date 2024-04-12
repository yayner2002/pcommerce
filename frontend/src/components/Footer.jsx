import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Row>
      <Col>
        <p className="text-center">Pcommerce. All Rights Reserved. &copy; {currentYear}</p>
      </Col>
    </Row>
  );
};

export default Footer;
