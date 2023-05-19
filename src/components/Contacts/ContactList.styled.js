import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  margin-top: 10px;
  padding-left: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
