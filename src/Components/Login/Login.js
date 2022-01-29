import React from 'react';
import { Row, Col, Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import FormContainer from "./FormContainer";

function Login() {
  return (
    <FormContainer>
    <h1>Sign In</h1>

    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
         
          
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          
          
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="mt-3 btn-outline-dark">
        Sign In
      </Button>
    </Form>

    <Row className="py-3">
      <Col>
        New Customer ?{" "}
        <Link to="../Register">
          Register
        </Link>
      </Col>
    </Row>
  </FormContainer>
);
  }

export default Login;
