import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export function Home() {
    const url =  "https://v2.api.noroff.dev/online-shop"
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json);
    }
    getData()
    
  }, []);


    return (
    <>
    <h1>My Store</h1>
    <Row lg ={3} md = {2} xs = {1}>
    </Row>
    
    </>
    )
}