import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductAdd from "./Pages/ProductAdd";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/product/add" element={<ProductAdd />} />

            </Routes>
          </Container>
        </main>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
