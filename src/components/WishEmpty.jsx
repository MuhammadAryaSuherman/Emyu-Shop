import { Button } from "react-bootstrap";
import emptywishes from "../assets/imgs/emptywishes.jpg";
import { useNavigate } from "react-router-dom";

function WishEmpty() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <img src={emptywishes} alt="Empty Wishes" />
      </div>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <Button variant="outline-primary" onClick={() => navigate("/")}>
          Back to products
        </Button>
      </div>
    </>
  );
}

export default WishEmpty;
