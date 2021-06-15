import React from 'react';
import ContactForm from '../components/ContactsForm';

const AddContactPage = ({history, contacts, setContacts}) => {

  const handleOnSubmit = (contact) => {
    setContacts([contact, ...contacts]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContactPage;