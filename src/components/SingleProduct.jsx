import { Button, Card, Row, Col } from "react-bootstrap";
import { Staricon } from "../assets/staricon"

export function SingleProduct({ title, id, description, image, price, discountedPrice, rating, reviews, posts, addToCart}) {
  return (
    <>
      <Card className="h-100 px-0" style={{ maxWidth: "600px" }}>
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
            <span className="fs-5">Price: {discountedPrice?discountedPrice:price}kr </span>
            {discountedPrice && discountedPrice!==price && 
            <>
              <span className="fs-6 text-decoration-line-through text-muted">Normal Price: {price}kr</span>
              <span className="fs-4 text-danger font-weight-bold">Save: {(price-discountedPrice).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}kr</span>
            </>
            }
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            className="mt-auto"
            variant="primary"
            onClick={() => addToCart(posts)}
          >
            Add to cart
          </Button>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <span className="fs-5"><Staricon />{rating}/10</span>
            </Col>
            {reviews && (
              <>
                <Row>
                  <span className="fs-5">Reviews:</span>
                </Row>
                {
                
                  reviews.map(r=> {
                  return (
                    <div key={r.id}>
                      <Row>
                        <Col><span className="fw-bold">{r.username}</span></Col><Col className="d-flex justify-content-end"><span><Staricon />{r.rating}/10</span></Col>
                      </Row>
                      <Row>
                        <Col>{r.description}</Col>
                      </Row>
                    </div>
                  );})
                }
              </>
            )}
          </Row>
        </Card.Footer>
      </Card>
    </>
  );


}