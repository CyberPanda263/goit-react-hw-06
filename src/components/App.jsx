import { useState, useEffect } from 'react';
import startContacts from '../Contacts.json';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox'
function App() {
 const title = "PhoneBook";

  return (
    <div>
      <h1>{title}</h1>
      <ContactForm
        /*addContact={addContact}*/
      />
      <SearchBox 
        /*FilterContacts={FilterContacts}
        setFilterContacts={setFilterContacts}*/
      />
      <ContactList
        /*Constacts={constsFiltering}
        removeContact={removeContact}*/
      />
    </div>
  )
}

export default App
