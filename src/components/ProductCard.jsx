import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { addToWishlist } from "../features/WishListSlice";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  // const { addToCart } = useContext(CartContext);
  // const { addToWish } = useContext(WishContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <Card style={{ cursor: "pointer" }}>
      <Card.Img
        style={{ height: "200px" }}
        variant="top"
        src={product.image}
        alt={product.name}
        onClick={handleCardClick}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Rp.{product.price.toLocaleString('id-ID')}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click from firing
              dispatch(addToCart(product));
              toast.success("Added to cart");
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click from firing
              dispatch(addToWishlist(product));
              toast("Added to WishList", {
                icon: "💖",
              });
            }}
          >
            Wish list
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
