import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <LabelFilter>
    Find contacts by Name
    <InputFilter
      onChange={handleChange}
      type="text"
      name="filter"
      value={filter}
    />
  </LabelFilter>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
