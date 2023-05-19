import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button } from 'components/Container/Container.styled';
import { FormStyle, InputForm, LabelForm } from './Form.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  telId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    const {
      handleSubmit,
      handleChange,
      nameId,
      telId,
      state: { name, number },
    } = this;

    return (
      <FormStyle onSubmit={handleSubmit}>
        <LabelForm>
          Name{' '}
          <InputForm
            type="text"
            name="name"
            id={nameId}
            onChange={this.handleChange}
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
            onChange={handleChange}
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
}
