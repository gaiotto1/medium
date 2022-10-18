import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 75px);
  height: auto;
  margin-left: 75px;
  margin-top: 75px;
  padding-bottom: 50px;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const ContainerPost = styled.div`
  width: calc(100% - 30px);
  max-width: 692px;
  height: auto;
  margin: auto;
`;

export const ContainerButtonLoadMore = styled.div`
  width: 100%;
  margin: 30px 0px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    font-size: 15px;
    color: #292929;
    cursor: pointer;
    border: 1px solid #292929;
    background-color: transparent;

    &:hover {
      background-color: #292929;
      color: #FFF;
    }
  }
`;


