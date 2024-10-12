import Spinner from "react-bootstrap/Spinner";
function Loading() {
  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height to center vertically
  };
  return (
    <div style={loadingStyle}>
      <Spinner animation="border" />
    </div>
  );
}

export default Loading;
