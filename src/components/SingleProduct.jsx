import { Button, Card, Row, Col } from "react-bootstrap";

export function SingleProduct({ title, id, description, image, price, discountedPrice, rating, reviews}) {
    return (
        <>
        <Row max-width = "600px">
            <img src= {image.url} alt="" />

        </Row>
        
        </>
    )


}