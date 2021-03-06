import { useEffect, useState } from 'react';
import shortId from'shortid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const  App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [...initialContacts]
    );    
  });
  const [filter, setFilter] = useState('');

    ////////////////// componentDidUpdate  /////////////

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerFormSubmit = ({ name, number }) => {
    if (!name || !number) return;

    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortId(),
      name,
      number,
    };
    setContacts(prevState => {
      return [...prevState, contact];
    });
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleGetFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerFormSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        contacts={handleGetFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
}

export default App;
