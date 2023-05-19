import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const myContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(myContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? toast.warn(`${name} is already in the contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter handleChange={handleChange} filter={filter} />
      <ContactsList
        contacts={getFilteredContacts}
        onDeleteContact={deleteContact}
      />
      <ToastContainer />
    </Container>
  );
};
