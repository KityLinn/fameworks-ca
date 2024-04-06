import { Card, Col } from "react-bootstrap";


export function Cartitem({items:{item, amount}}) {

    return (
      <>
        <Card key={item.id} className="h-100" style={{ maxWidth: "300px" }}>
          <Card.Img
            variant="top"
            height="250px"
            src={item.image?.url}
            alt={item.image?.alt}
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex mb-4 flex-column">
              <span className="fs-5 mb-5">{item.title}</span>
              <span className="fs-5">Price: {item.price}kr </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );


}