import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 75px);
  height: auto;
  margin-left: 75px;

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