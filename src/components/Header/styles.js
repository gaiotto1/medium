import styled from 'styled-components';

import user from "../../assets/user.png";

export const ContainerHeader = styled.div`
  width: 75px;
  min-height: 100vh;
  border-right: 1px solid rgba(230, 230, 230, 1);
  position: fixed;
  // z-index: 1000;
  background-color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    height: 56px;
    min-height: 0px;
    bottom: 0px;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
  }
`;

export const Logo = styled.a`
  position: absolute;
  margin-top: 36px;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContainerAvatar = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  margin-bottom: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #333;
    background-image: url(${user});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContainerNav = styled.nav`
  width: 100%;
  height: auto;
  min-height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    width: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &:last-child {
      margin-left: 2px;
    }
  }

  span {
    width: 24px;
    height: 1px;
    background-color: rgba(230, 230, 230, 1);
  }

  @media (max-width: 900px) {
    width: 80%;
    min-height: 0px;
    height: 75px;
    justify-content: space-between;

    a {
      width: auto;
      padding: 20px;
    }

    span {
      display: none;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Logout = styled.a`
  position: absolute;
  bottom: 36px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
