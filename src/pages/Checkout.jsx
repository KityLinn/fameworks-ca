import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Cartitem } from "../components/Cartitem.jsx"
 
export function Checkout() {
  const [cartData, setcartData] = useState(() => {
    const data = localStorage.getItem("CARTITEMS")
    if (data == null) return []

    return JSON.parse(data)
  })

  useEffect(()=> {
    function storageEventHandler() {
      let cartString = localStorage.getItem("CARTITEMS");
      if (cartString) {
        let cart = JSON.parse(cartString);
        setcartData(cart);
      }
    }
    storageEventHandler();
    window.addEventListener("storage", storageEventHandler);
    return () => {
        window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  console.log(cartData)

  return (
    <>
      <Row className="d-flex flex-column justify-content-center align-items-center mt-5 g-3 w-100">
      {Object.keys(cartData).map((key) => {
        return (
            <Cartitem items={cartData[key]} key={key}/>
        );
      })}
      </Row>
    </>
  );
}