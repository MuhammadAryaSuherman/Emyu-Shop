import { Button, Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/checkout");
  }

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shippingEstimate = 5000; // Example shipping estimate in IDR
  const taxEstimate = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + shippingEstimate + taxEstimate;

  const formatCurrency = (value) =>
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // No decimal places
      maximumFractionDigits: 0, // No decimal places
    });

  return (
    <Col md={4}>
      <Card className="p-3">
        <h4>Order summary</h4>
        <div className="d-flex justify-content-between my-2">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>Shipping estimate</span>
          <span>{formatCurrency(shippingEstimate)}</span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>Tax estimate</span>
          <span>{formatCurrency(taxEstimate)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between my-2">
          <strong>Order total</strong>
          <strong>{formatCurrency(total)}</strong>
        </div>
        {cart.length === 0 || !user ? (
          <Button variant="primary" block className="mt-3" disabled>
            Checkout
          </Button>
        ) : (
          <Button
            variant="primary"
            block
            className="mt-3"
            onClick={handleClick}
          >
            Checkout
          </Button>
        )}
      </Card>
    </Col>
  );
}

export default OrderSummary;
