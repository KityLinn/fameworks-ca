import { useEffect, useState } from "react";
import { Col, Row, Form} from "react-bootstrap";
import { StoreItem } from "../components/Storeitem.jsx";

export function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const [posts, setPosts] = useState([]);
  const [searchItems, setsearchItems] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json.data);
      setsearchItems(json.data)
      
    }
    getData();
  }, []);


 function searchFunc (e) {
  return setSearch(e.target.value)
 }

 useEffect(()=> {
  if (search) {
    setPosts(searchItems.filter(p=>{
        return p.title.includes(search)||p.description.includes(search);
    }));
  } else {
    setPosts(searchItems);
  }
}, [search]);

 

  return (
    <>
      <h1 className="mb-5">My Store</h1>
      <Form.Group
        className="d-flex flex-column align-items-center justify-content-center mb-5"
        controlId="searchForm"
      >
        <Form.Label>Search here</Form.Label>
        <Form.Control
          className="w-50 border-black border-2"
          type="text"
          placeholder="Search.."
          onChange={searchFunc}
        />
      </Form.Group>
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
