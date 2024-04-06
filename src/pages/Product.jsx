import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
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

  const [cartData, setcartData] = useState(() => {
    const data = localStorage.getItem("CARTITEMS");
    if (data == null) return {};
    return JSON.parse(data)
  })

  useEffect(() => {
    localStorage.setItem("CARTITEMS", JSON.stringify(cartData))
    window.dispatchEvent(new Event("storage"))
  }, [cartData])

  function addToCart(data) { 
    let newCart = Object.assign({}, cartData);
      if (newCart[data.id]) {
        newCart[data.id].amount = cartData[data.id].amount + 1;
      } else {
        newCart[data.id] = {item: data, amount:1};
      }     
    setcartData(newCart);
  }


  return (
    <>
    <Row className="d-flex flex-column justify-content-center align-items-center mt-5">
      <SingleProduct {...posts} posts={posts} addToCart={addToCart}  />
    </Row>
    </>
  );
}