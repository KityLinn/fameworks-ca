import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Product } from "./pages/Product"
import { Checkout } from "./pages/Checkout"
import { CheckoutSuccess } from "./pages/CheckoutSuccess"
import {Layout} from "./components/Layout"


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
