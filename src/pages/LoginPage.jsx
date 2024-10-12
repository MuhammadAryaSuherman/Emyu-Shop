import { useState } from "react";
import { Button, Form, Container, Alert, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../features/AuthSlice";
import { useDispatch } from "react-redux";

function LoginPage() {
  // const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = { email, password, _id: "32424" };
      dispatch(login(user));
      toast.success("Successfully logged in!");
      setTimeout(() => {
        navigate("/cart");
      }, 1000);
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }

    setLoading(false);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={5} xl={4}>
          <div
            className="border p-4 rounded shadow-sm bg-white"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            <h3 className="text-center mb-4">Sign in to your account</h3>
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

              <Form.Group
                controlId="formRememberMe"
                className="d-flex justify-content-between align-items-center mt-3"
              >
                <Form.Check type="checkbox" label="Remember me" />
                <a href="#!" className="text-decoration-none">
                  Forgot password?
                </a>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-4"
                disabled={loading} // Disable the button when loading
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
