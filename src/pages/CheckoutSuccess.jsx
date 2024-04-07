import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

export function CheckoutSuccess() {
  useEffect(() => {
    localStorage.setItem("CARTITEMS", JSON.stringify({}));
    window.dispatchEvent(new Event("storage"))
  }, []);

  return (
    <>
      <div className="mb-5">
        <h1>Checkout succesful!</h1>
      </div>
      <div className="d-flex justify-content-center">
      <Button href= {"/"} className="mt-5" variant="primary">Back to store</Button>
      </div>
    </>
  );
}