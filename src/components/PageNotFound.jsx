import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../assets/imgs/notfound.png";

const photoStyle = {
  width: "800px",
  height: "500px",
};

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center">
        <img style={photoStyle} src={pagenotfound} alt="Page Not Found" />
      </div>
      <div className="text-center" style={{ marginTop: "30px" }}>
        <Button variant="outline-primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </>
  );
}

export default PageNotFound;
