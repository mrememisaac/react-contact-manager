import React from 'react';
import _ from 'lodash';
import Contact from '../components/Contact';

const Contacts = ({contacts, setContacts}) => {

  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <>
      <h2>Contact List</h2>
      <div className="contacts-list">
        {
          _.isEmpty(contacts) ? (<p>No Contacts</p>) : 
          (contacts.map((contact, key) => (<Contact key={key} {...contact} removeContactHandler={removeContactHandler}/>)))   
        }
      </div>
    </>
  );
}

export default Contacts;