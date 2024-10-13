import { Button, Card, Col, Row, Container } from "react-bootstrap";
import CartEmpty from "../components/CartEmpty";
import OrderSummary from "../components/OrderSummary";
import {
  removeFromCart,
  setCart,
  updateCartQuantity,
} from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // Fungsi untuk format mata uang
  const formatCurrency = (value) =>
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  // Increment quantity
  function incrementQuantity(product) {
    dispatch(
      updateCartQuantity({ id: product.id, quantity: product.quantity + 1 })
    );
  }

  // Decrement quantity
  function decrementQuantity(product) {
    if (product.quantity > 1) {
      dispatch(
        updateCartQuantity({ id: product.id, quantity: product.quantity - 1 })
      );
    } else {
      dispatch(removeFromCart(product));
    }
  }

  function handleDeleteAll() {
    dispatch(setCart([]));
  }

  return (
    <Container className="my-5">
      <Row>
        {/* Cart Items */}
        <Col md={8}>
          <div
            className="d-flex align-items-center"
            style={{ justifyContent: "space-between" }}
          >
            <h2>Shopping Cart</h2>
            <Button variant="danger" onClick={handleDeleteAll}>
              Delete All
            </Button>
          </div>
          {cart.length === 0 ? (
            <CartEmpty />
          ) : (
            cart.map((product) => (
              <Card key={product.id} className="mb-3 p-3">
                <Row>
                  <Col md={3}>
                    <Card.Img src={product.image} alt={product.name} />
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        {product.color ? <span>{product.color}</span> : ""}
                        {product.size ? <span> | {product.size}</span> : ""}
                        <br />
                        <strong>
                          {formatCurrency(product.price * product.quantity)}
                        </strong>{" "}
                        {/* Harga berdasarkan quantity */}
                        <br />
                        {product.inStock ? (
                          <span className="text-success">In stock</span>
                        ) : (
                          <span className="text-muted">
                            Ships in 3-4 weeks
                          </span>
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3} className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => decrementQuantity(product)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{product.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => incrementQuantity(product)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="outline-danger"
                      className="ml-4"
                      onClick={() => dispatch(removeFromCart(product))}
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>
        {/* Order Summary */}
        <OrderSummary />
      </Row>
    </Container>
  );
}

export default CartPage;
