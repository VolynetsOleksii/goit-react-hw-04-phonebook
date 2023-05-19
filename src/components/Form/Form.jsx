import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button } from 'components/Container/Container.styled';
import { FormStyle, InputForm, LabelForm } from './Form.styled';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const nameId = nanoid();
  const telId = nanoid();

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
      };

      const handleChangeNumber = evt => {
        setNumber(evt.currentTarget.value);
          };

  const reset = () => {
    setName('');
    setNumber('');
      };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({name, number});
    reset();
  };
 
  return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelForm>
        Name{' '}
        <InputForm
          type="text"
          name="name"
          id={nameId}
          onChange={handleChangeName}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>
      <LabelForm>
        Number{' '}
        <InputForm
          type="tel"
          name="number"
          id={telId}
          onChange={handleChangeNumber}
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};