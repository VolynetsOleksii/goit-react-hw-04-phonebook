import styled from 'styled-components';

export const FormStyle = styled.form`
  max-width: 200px;
  border: ${props => props.theme.colors.lightBlue};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const LabelForm = styled.label`
  color: ${p => p.theme.colors.grey};
`;

export const InputForm = styled.input`
  margin-top: 0px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.lightBlue};
  border-radius: 5px;
  &:first-child {
    margin-bottom: 10px;
  }
`;
