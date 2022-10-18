import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 30px);
  max-width: 692px;
  margin: auto;
  height: auto;
  padding-bottom: 20px;
  margin-top: 50px;
  margin-bottom: 60px;
  border-bottom: 1px solid #757575;

  display: flex;
  align-items: flex-start;
  // justify-content: space-around;
  flex-wrap: wrap;

  p {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
    color: #292929;
    margin-top: 5px;
  }
`;

export const Item = styled.div`
  position: relative;
  border: 1px solid #757575;
  padding: 4px 14px;
  color: #757575;
  font-size: 16px;
  margin: 0px 10px 10px 0px;
  cursor: pointer;

  ${props => props.selected && `
    background-color: #292929;
    color: #fff;
  `}

  &:hover {
    background-color: #292929;
    color: #FFF;
  }
`;

