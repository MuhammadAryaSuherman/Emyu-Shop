import { Button } from "react-bootstrap";
import cartempty from "../assets/imgs/cartempty.png";
import { useNavigate } from "react-router-dom";

function CartEmpty() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <img src={cartempty} alt="Cart Empty" />
      </div>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <Button variant="outline-primary" onClick={() => navigate("/")}>
          Back to products
        </Button>
      </div>
    </>
  );
}

export default CartEmpty;
