import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Cartitem } from "../components/Cartitem.jsx"
import {  Link } from "react-router-dom";
 
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

  const [cartTotal, setcartTotal] = useState(0)

  useEffect(()=> {
    let tempTotal = 0;
    Object.keys(cartData).forEach(key => {
    tempTotal +=  cartData[key].amount * cartData[key].item.discountedPrice
    })
    setcartTotal(tempTotal)
  }, [cartData]);


  console.log(cartData)

  return (
    <>
      <h1>Your Cart</h1>
      <Row className="d-flex flex-column justify-content-center align-items-center mt-5 g-3">
        {Object.keys(cartData).map((key) => {
          return <Cartitem items={cartData[key]} key={key} />;
        })}
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <h2 className="fs-5">Your Cart Total</h2>
          <span><p className="fw-bold fs-6">Your total: {cartTotal}</p></span>
        </div>
        <Link to= "/checkoutsuccess">
           <Button className="mt-5 p-2" variant="primary" style={{ maxWidth: "200px" }}>Click to pay</Button>
        </Link>
        
      </Row>
    </>
  );
}