import { Card, Col } from "react-bootstrap";


export function Cartitem({items:{item, amount}}) {

    return (
      <>
        <Card key={item.id} className="h-100 d-flex flex-row" style={{ maxWidth: "400px" }}>
          <Card.Img
            variant="top"
            height="100px"
            src={item.image?.url}
            alt={item.image?.alt}
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex flex-row gap-5">
              <span className="fs-6">{item.title}</span>
              <span className="fs-6">Price: {item.discountedPrice*amount}kr </span>
            </Card.Title>
            <span>Amount: {amount}</span>
          </Card.Body>
        </Card>
      </>
    );


}