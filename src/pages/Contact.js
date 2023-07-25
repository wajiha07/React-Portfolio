import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (event) => {};
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
      className="contact"
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl
                  required
                  type="text"
                  placeholder="Name"
                ></FormControl>
              </FormGroup>

              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Email</FormLabel>
                <FormControl
                  required
                  type="email"
                  placeholder="Email"
                ></FormControl>
              </FormGroup>

              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Message</FormLabel>
                <FormControl
                  required
                  as="textarea"
                  placeholder="Message"
                ></FormControl>
              </FormGroup>

              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              If you want to chat about a project — email me on wajiha@gmail.com
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in Wroclaw, Poland — available for remote-friendly
              work from December 2022.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="#">Github</a>{" "}
                </ListGroupItem>
                <ListGroupItem>
                  <a href="#">Linkedin</a>{" "}
                </ListGroupItem>
                <ListGroupItem>
                  <a href="#">Facebook</a>{" "}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  <a href="#">YouTube</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
