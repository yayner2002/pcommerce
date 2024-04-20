import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import ProductDetail from "./Pages/ProductDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </Container>
      </main>
      <Footer />
      </Router>
    </>
  );
};

export default App;
