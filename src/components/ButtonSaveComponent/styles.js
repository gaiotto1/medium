import styled from 'styled-components';

export const ButtonSave = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  margin: 0 10px;
  outline: none;
  padding: 0 20px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;