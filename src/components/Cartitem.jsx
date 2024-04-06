import { Card } from "react-bootstrap";


export function Cartitem({ title, id, description, image, price, discountedPrice, rating, reviews, posts, addToCart}) {
    return (
      <>
        <Card className="h-100" style={{ maxWidth: "600px" }}>
          <Card.Img
            variant="top"
            height="250px"
            src={image?.url}
            alt={image?.alt}
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex mb-4 flex-column">
              <span className="fs-5 mb-5">{title}</span>
              <span className="fs-5">Price: {price}kr </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );


}