import { Col, Row, Form, Button} from "react-bootstrap";
import { useForm } from 'react-hook-form';




export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
      console.log(data);
    }

  return (
    <>
      <Row className="d-flex align-items-center w-100 justify-content-center">
        <h1>Contact us</h1>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "600px" }} >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              className={errors.fullName && "error"}
              type="text"
              placeholder="Enter full name"
              {...register('fullName', {
                required: true,
                minLength: {value: 3,
                            message: "Full name must be more than 3 characters" }
              })}
            />
            <p>{errors.fullName?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className={errors.emailFull && "error"}
              type="email"
              placeholder="Enter email"
              {...register('emailFull', {
                required: true,
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Valid email required",
                  },
              })}
            />
            <p>{errors.emailFull?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              className={errors.SubjectFull && "error"}
              type="text"
              placeholder="Subject"
              {...register('SubjectFull', {
                required: true,
                minLength: {value: 3,
                            message: "Subject must be more than 3 characters" }
              })}
            />
            <p>{errors.SubjectFull?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              className={errors.bodyFull && "error"}
              placeholder="Body"
              {...register('bodyFull', {
                minLength: {value: 3,
                  message: "Body name must be more than 3 characters" }
              })}
            />
            <p>{errors.bodyFull?.message}</p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
}