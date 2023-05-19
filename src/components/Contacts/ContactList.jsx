import PropTypes from 'prop-types';
import { Button } from '../Container/Container.styled';
import { ContactItem, ContactListStyle } from './ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ContactListStyle>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ContactListStyle>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
