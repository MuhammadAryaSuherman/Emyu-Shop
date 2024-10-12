import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/AuthSlice";
import logo from "../assets/imgs/emyu.png"; // Import the logo

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const cart = useSelector((state) => state.cart.cart);
  const wishes = useSelector((state) => state.wishlist.wishes || []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Emyu Shop Logo"
            style={{ width: "40px", marginRight: "10px" }} // Adjust size and spacing
          />
          Emyu Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div
              className="d-flex d-md-inline-flex flex-column flex-md-row"
              style={{ alignItems: "center", marginRight: "22px" }}
            >
              <Nav.Link onClick={() => navigate("/")}>Products</Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")}>
                Carts {""}
                <Badge bg="primary">{cart.length}</Badge>
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/wish")}>
                Wishing List
                {""}
                <Badge bg="info">{wishes.length}</Badge>
              </Nav.Link>

              {user ? (
                <Nav.Link onClick={handleLogout}>
                  <Button color="white" variant="outline-primary">
                    Log out
                  </Button>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={() => navigate("/login")}>
                    <Button variant="primary">Login</Button>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/signup")}>
                    <Button variant="outline-primary">Sign Up</Button>
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
