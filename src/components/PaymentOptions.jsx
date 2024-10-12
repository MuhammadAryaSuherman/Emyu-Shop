import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PaymentOptions() {
  const navigate = useNavigate();
  const makeAToast = () => {
    toast.success("Your order has been sent!");
    setTimeout(() => {
      toast.success("Thank you!");
    }, 2000);
    navigate("/");
  };
  return (
    <>
      <h4 className="mt-4">Payment Options</h4>
      <Form.Group as={Row} controlId="formPaymentMethod">
        <Form.Label column sm={2}>
          Payment Method
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Credit Card"
            name="paymentMethod"
            id="creditCard"
            required
          />
          <Form.Check
            type="radio"
            label="PayPal"
            name="paymentMethod"
            id="paypal"
          />
          <Form.Check
            type="radio"
            label="Cash"
            name="paymentMethod"
            id="bankTransfer"
          />
        </Col>
      </Form.Group>

      <Button variant="success" type="submit" onClick={makeAToast}>
        Complete Purchase
      </Button>
    </>
  );
}

export default PaymentOptions;
