import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product() {
    const url =  "https://v2.api.noroff.dev/online-shop/?"
    const [posts, setPosts] = useState([])
    const {id} = useParams()
  useEffect(() => {
    async function getData() {
      const response = await fetch(url + id);
      const json = await response.json();
      setPosts(json.data);
    }
    getData()
    console.log(posts)
      
  }, []); 
    return <h1>Product</h1>
}