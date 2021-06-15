import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { FaMobile } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {BiCalendarAlt} from 'react-icons/bi';

const Contact = ({id, firstname, lastname, email, mobile, date, removeContactHandler}) => {
    return(
        <Card style={{ width:'15rem'}} className="contact">
            <Card.Body>
                <Card.Title className="contact-name">{firstname} {lastname}</Card.Title>
                <div className="contact-details">
                    <div>
                        <FaMobile/>{mobile}
                    </div>
                    <div>
                        <MdEmail/>{email}
                    </div>
                    <div>
                        <BiCalendarAlt/>{new Date(date).toDateString()}
                    </div>
                </div>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger" onClick={() => removeContactHandler(id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
}
export default Contact;