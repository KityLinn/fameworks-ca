import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/Storeitem.jsx";

export function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json.data);
    }
    getData();
  }, []);
  console.log(posts);

  return (
    <>
      <h1 className="mb-5">My Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {posts.map((items) => {
          return (
            <Col key={items.id}>
              <StoreItem {...items} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
