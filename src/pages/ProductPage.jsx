import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchProducts } from "../features/ProductSlice";
import { useEffect } from "react";

function ProductPage() {
  const dispatch = useDispatch();
  // Ensure that state.product exists and has the correct structure
  const {
    products = [],
    loading,
    error,
  } = useSelector((state) => state.product || {});

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error("Products Not Found!");
    return null;
  }
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">Product List</h2>

        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default ProductPage;
