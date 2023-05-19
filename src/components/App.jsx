import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const myContacts = JSON.parse(localStorage.getItem('contacts'));
    if (myContacts) {
      this.setState({ contacts: myContacts });
    };
  };
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    };
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? toast.warn(`${name} is already in the contacts`)
      : this.setState(() => ({
          contacts: [newContact, ...contacts],
        }));
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const {
      addContact,
      handleChange,
      getFilteredContacts,
      deleteContact,
      state: { filter },
    } = this;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <Filter handleChange={handleChange} filter={filter} />
        <ContactsList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
        <ToastContainer />
      </Container>
    );
  }
}
