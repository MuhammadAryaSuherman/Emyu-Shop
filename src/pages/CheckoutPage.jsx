import { Container, Form } from "react-bootstrap";
import UserInformation from "../components/UserInformation";
import PaymentOptions from "../components/PaymentOptions";

function CheckoutPage() {
  return (
    <Container className="mt-5">
      <h2
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "blue",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Checkout
      </h2>
      <Form>
        <UserInformation />
        <PaymentOptions />
      </Form>
    </Container>
  );
}

export default CheckoutPage;
