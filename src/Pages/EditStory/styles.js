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

export const Wrapper = styled.form`
  width: calc(100% - 30px);
  max-width: 692px;
  height: auto;
  margin: auto;

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
    height: 45px;
    border-radius: 3px;
    border: 1px solid #757575;
    padding: 0px 10px;
  }

  select {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    border: 1px solid #757575;
    padding: 0px 10px;
  }

  textarea {
    width: 100%;
    height: 150px;
    border-radius: 3px;
    border: 1px solid #757575;
    padding: 10px 10px;
    margin-bottom: 30px;
  }

  button {
    width: 100%;
    background-color: #292929;
    color: #fff;
    padding: 15px 0px;
    font-size: 15px;
    border: 1px solid #292929;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #292929;
      border: 1px solid #292929;
    }
  }
`;