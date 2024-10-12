import { Col, Form, Row } from "react-bootstrap";

function UserInformation() {
  return (
    <>
      <Form.Group as={Row} controlId="formUserName">
        <Form.Label column sm={2}>
          Full Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Col>
      </Form.Group>

      {/* Shipping Address */}
      <h4 className="mt-4">Shipping Address</h4>
      <Form.Group as={Row} controlId="formAddress">
        <Form.Label column sm={2}>
          Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="1234 Main St" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formCity">
        <Form.Label column sm={2}>
          City
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="City" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formState">
        <Form.Label column sm={2}>
          State
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="State" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formZip">
        <Form.Label column sm={2}>
          Zip Code
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Zip Code" required />
        </Col>
      </Form.Group>
    </>
  );
}

export default UserInformation;
