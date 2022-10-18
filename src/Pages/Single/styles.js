import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 75px);
  height: auto;
  margin-left: 75px;
  margin-bottom: 80px;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 30px;

  img {
    width: 100%;
    height: auto;
    margin: auto;
  }

  h1 {
    font-size: 30px;
    color: #292929;
    font-weight: 400;
    margin: 50px 0px 30px 0px;
  }

  h2 {
    font-size: 20px;
    color: #292929;
    font-weight: 400;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    color: #292929;
  }
`;
