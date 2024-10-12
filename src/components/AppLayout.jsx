import Footer from "./Footer";
import NavBar from "./NavBar";

function AppLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
