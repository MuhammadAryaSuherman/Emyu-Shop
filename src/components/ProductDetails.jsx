// import { useContext } from "react";
import { Row, Col, Image, Button, Container, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  // const { addToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Container className="mt-4">
        <h2>Product not found</h2>
        <Button variant="danger" onClick={() => navigate(-1)}>
          Back to Products
        </Button>
      </Container>
    );
  }

  function handleAddCart() {
    // Add product to cart
    dispatch(addToCart(product));
  }
  return (
    <Container className="mt-4">
      <Row>
        {/* Product Image */}
        <Col xs={12} md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>

        {/* Product Information */}
        <Col xs={12} md={6}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title as="h2">{product.name}</Card.Title>
              <Card.Text as="h5" className="text-muted">
                {product.category}
              </Card.Text>
              <Card.Text as="h4" className="text-success">
                {product.price}
              </Card.Text>
              <Card.Text>{product.description}</Card.Text>

              <Button variant="danger" onClick={() => navigate(-1)}>
                Back to Products
              </Button>
              <Button
                style={{ marginLeft: "40px" }}
                variant="primary"
                className="me-2"
                onClick={handleAddCart}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
