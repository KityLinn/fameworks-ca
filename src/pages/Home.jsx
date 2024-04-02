import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/Storeitem";

export function Home() {
    const url =  "https://v2.api.noroff.dev/online-shop"
    const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json.data);
    }
    getData()
      
  }, []); 



    return (
    <>
    <h1>My Store</h1>

    
    </>
    )
}