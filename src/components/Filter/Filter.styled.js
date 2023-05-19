import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: block;
  color: ${props => props.theme.colors.gray};
`;

export const InputFilter = styled.input`
  display: block;
  margin-top: 0px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.lightBlue};
  border-radius: 5px;
`;
