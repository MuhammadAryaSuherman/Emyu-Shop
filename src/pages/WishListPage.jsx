import { Table, Container, Button, Card } from "react-bootstrap";
import WishEmpty from "../components/WishEmpty";
import { addToCart } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/WishListSlice";
import toast from "react-hot-toast";

const WishlistTable = () => {
  const wishes = useSelector((state) => state.wishlist.wishes || []);
  const dispatch = useDispatch();

  // Fungsi untuk format mata uang
  const formatCurrency = (value) =>
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Tidak ada desimal
      maximumFractionDigits: 0, // Tidak ada desimal
    });

  return (
    <Container className="mt-4">
      <h3 className="mb-3">My Wishlist</h3>
      {wishes.length > 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Remove</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {wishes.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <Card.Img
                    style={{ width: "100px" }}
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{formatCurrency(item.price)}</td> {/* Harga diformat */}
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Remove
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      dispatch(addToCart(item));
                      toast.success("Added to cart");
                    }}
                  >
                    Add to Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <WishEmpty />
      )}
    </Container>
  );
};

export default WishlistTable;
