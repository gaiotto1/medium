import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 416px;
  margin: auto;
  padding: 30px 0px;

  h1 {
    width: 100%;
    font-size: 38px;
    color: #292929;
    font-weight: 700;
    margin-bottom: 30px;
  }

  form {
    width: 100%;

    div {
      width: 100%;
      margin-top: 25px;
    }

    label {
      font-size: 14px;
      color: #292929;
      font-weight: 500;
      margin-bottom: 10px;
      display: block;
    }

    input {
      width: 100%;
      height: 40px;
      padding: 10px 16px;
      background-color: #f3f3f4;
      border: none;
    }

    button {
      width: 100%;
      max-width: 200px;
      height: 40px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      border: none;
      background-color: rgba(25, 25, 25, 1);

      &:hover {
        background-color: #fff;
        color: rgba(25, 25, 25, 1);
      }
    }

    a {
      width: 100%;
      font-size: 14px;
      color: #292929;
      display: block;
      font-weight: 500;;
      text-align: right;
      margin: 20px 0px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
