import {Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Layout } from "./components/Layout.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Product } from "./pages/Product.jsx";
import { Checkout } from "./pages/Checkout.jsx";
import { CheckoutSuccess } from "./pages/CheckoutSuccess.jsx";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Layout>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          </Routes>
        </Container>
      </Layout>
    </>
  );
}

export default App;
