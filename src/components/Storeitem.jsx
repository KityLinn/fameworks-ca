import { Button, Card } from "react-bootstrap"


export function StoreItem({ title, id, description, image, price, discountedPrice }) {
    return (
        <>
 <Card border="primary" className="h-100">
      <Card.Img
        variant="top"
        src={image.url}
        alt={image.alt}
        height="250px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex mb-4 flex-column">
          <span className="fs-5 mb-5">{title}</span>
          <span className="fs-5">Price: {discountedPrice?discountedPrice:price}kr </span>
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button href= {"/product/" + id} className="mt-auto" variant="primary">Checkout product</Button>
      </Card.Body>
    </Card>
        </>
    ) 


 }