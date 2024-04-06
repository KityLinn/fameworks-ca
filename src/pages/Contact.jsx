import { useEffect, useState } from "react";
import { Col, Row, Form, Button} from "react-bootstrap";


export function Contact() {
  return (
    <>
      <Row className="d-flex align-items-center w-100 justify-content-center">
        <h1>Contact us</h1>
        <Form  style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              className="border-black border-2"
              type="text"
              placeholder="Enter full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border-black border-2"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              className="border-black border-2"
              type="text"
              placeholder="Subject"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              className="border-black border-2"
              placeholder="Body"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
}