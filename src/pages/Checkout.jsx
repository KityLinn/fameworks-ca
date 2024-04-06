import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Cartitem } from "../components/Cartitem.jsx"
 
export function Checkout() {
    const [cartData, setcartData] = useState(() => {
        const data = localStorage.getItem("CARTITEMS")
        if (data == null) return []
    
        return JSON.parse(data)
      })

      console.log(cartData)

    return (
        <>
        <Row className="d-flex flex-column justify-content-center align-items-center mt-5 g-3">
        {cartData.map((items) => {
          return (
            <Col key={items.id}>
              <Cartitem {...items} />
            </Col>
          );
        })}
        </Row>
        </>
      );
}