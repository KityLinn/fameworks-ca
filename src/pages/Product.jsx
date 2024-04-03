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
  console.log(posts);

  return (
    <>
    <h1>Test</h1>
    </>
  );
}