import { Card, Col } from "react-bootstrap";


export function Cartitem({ items }) {
    return (
      <>
        <Card key={items.data.id} className="h-100" style={{ maxWidth: "300px" }}>
          <Card.Img
            variant="top"
            height="250px"
            src={items.data.image?.url}
            alt={items.data.image?.alt}
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex mb-4 flex-column">
              <span className="fs-5 mb-5">{items.data.title}</span>
              <span className="fs-5">Price: {items.data.price}kr </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );


}