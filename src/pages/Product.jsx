import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { SingleProduct } from "../components/SingleProduct.jsx";


export function Product() {
  const url = "https://v2.api.noroff.dev/online-shop/";
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url + id);
      const json = await response.json();
      setPosts(json.data);
    }
    getData();
  }, []);

  const [cartValue, setcartValue] = useState(() => {
    const value = localStorage.getItem("CARTITEMS")
    if (value == null) return []

    return JSON.parse(value)
  })

  useEffect(() => {
    localStorage.setItem("CARTITEMS", JSON.stringify(cartValue))
  }, [cartValue])

  function addToCart(data) {
    setcartValue(currentCart => {
      return [
        ...currentCart,
        {data},
      ]
    })
  }

  return (
    <>
    <Row className="d-flex flex-column justify-content-center align-items-center mt-5">
      <SingleProduct {...posts} posts={posts} addToCart={addToCart} />
    </Row>



    </>
  );
}