import { useEffect, useState } from "react";

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


    return <h1>Home</h1>
}