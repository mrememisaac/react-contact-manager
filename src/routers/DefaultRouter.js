import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddContactPage from '../pages/AddContactPage';
import ContactsListPage from '../pages/ContactsListPage';
import useLocalStorage from '../hooks/useLocalStorage';

const DefaultRouter = () => {
  const [contacts, setContacts] = useLocalStorage('contacts',[]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route render={(props) => (<ContactsListPage {...props} contacts={contacts} setContacts={setContacts} /> )} path="/" exact={true}/>
            <Route render={(props) => (<AddContactPage {...props} contacts={contacts} setContacts={setContacts} /> )} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DefaultRouter;