import axios from "axios";
import { useState } from "react";
import { Button, Form, Container, Alert, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const newUser = { email, password };

      const response = await axios.post("/api/users", newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (response.status === 201) {
        toast.success("User created successfully!");
        navigate("/login");
      } else {
        throw new Error("Failed to create user");
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={5} xl={4}>
          <div
            className="border p-4 rounded shadow-sm bg-white"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            <h3 className="text-center mb-4">Create an Account</h3>
            {/* Display error message if there is any */}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-4"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
