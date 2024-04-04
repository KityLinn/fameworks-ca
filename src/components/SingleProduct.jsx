import { Button, Card, Row, Col } from "react-bootstrap";

export function SingleProduct({ title, id, description, image, price, discountedPrice, rating, reviews, posts, addTodo}) {
    return (
      <>
        <Card className="h-100" style={{ maxWidth: "600px" }}>
          <Card.Img
            variant="top"
            height="300px"
            src={image?.url}
            alt={image?.alt}
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex mb-4 flex-column">
              <span className="fs-5 mb-5">{title}</span>
              <span className="fs-5">Price: {price}kr </span>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              className="mt-auto"
              variant="primary"
              onClick={() => addTodo(posts)}
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );


}