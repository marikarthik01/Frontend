import React, { useState, useEffect } from "react";
import FormContainer from '../Login/FormContainer';

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* REACT BOOTSTRAP */
import { Row, Col, Button, Form } from "react-bootstrap";


/* REACT - REDUX */

/* ACTION CREATORS */
const Register =()=>{

  return (
    <FormContainer>
      <h1>Register</h1>

     
      <Form >
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter Name"
            
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
        
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            
          />
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account ?{" "}
          <Link to="#">
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default Register;