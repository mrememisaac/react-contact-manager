import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    firstname: props.contact ? props.contact.firstname : '',
    lastname: props.contact ? props.contact.lastname : '',
    mobile: props.contact ? props.contact.mobile : '',
    email: props.contact ? props.contact.email : '',
    date: props.contact ? props.contact.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { firstname, lastname, email, mobile } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstname, lastname, email, mobile];
    let errorMsg = '';

    const formCompleted = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (formCompleted) {
      const contact = {
        id: uuidv4(),
        firstname,
        lastname,
        email,
        mobile,
        date: new Date()
      };
      props.handleOnSubmit(contact);
    } else {
      errorMsg = 'Please complete all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
        setContact((prevState) => ({
          ...prevState,
          [name]: value
        }));
    
  };

  return (
    <div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstname"
            value={firstname}
            placeholder="First name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Last name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            className="input-control"
            name="mobile"
            value={mobile}
            placeholder="+CountryCode 123 456 7890 e.g. +1 800 123 4567"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;