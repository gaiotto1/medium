import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 692px;
  height: auto;
  margin: auto;
  margin-bottom: 25px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const ContainerText = styled.div`
  width: calc(100% - 200px);
  height: auto;

  a {
    font-size: 22px;
    color: #292929;
    font-weight: 500;
    cursor: pointer;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #292929;
    text-align: justify;
    line-height: 22px;
    margin-top: 14px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ContainerImage = styled.div`
  width: 140px;
  height: 139px;
  background-size: cover;
  background-position: center top;
  display: block;
  border-radius: 1px;
  
  @media (max-width: 500px) {
    width: 100%;
  }
`;
