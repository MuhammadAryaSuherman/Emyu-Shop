import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductPage from "./pages/ProductPage"; // Importing ProductPage
import CartPage from "./pages/CartPage"; // Importing CartPage
import WishingListPage from "./pages/WishListPage"; // Importing WishingListPage
import LoginPage from "./pages/LoginPage"; // Importing LoginPage
import SignUpPage from "./pages/SignUpPage"; // Importing SignUpPage

import ProductDetails from "./components/ProductDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./old-context/AuthContext";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./components/PageNotFound";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <AppLayout>
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wish" element={<WishingListPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AppLayout>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
