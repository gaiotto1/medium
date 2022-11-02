import React from 'react';
import { useNavigate } from "react-router-dom";

import { auth, signOut } from '../../services/firebase';

import { ContainerHeader, Logo, ContainerNav, Logout } from './styles';

import logoImg from "../../assets/logo.png";
import home from "../../assets/home.svg";
import bookmark from "../../assets/bookmark.svg";
import stories from "../../assets/your-stories.svg";
import write from "../../assets/write.svg";

const Header = () => {
  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth).then(() => {
      navigate('/signin');
    });
  }

  return (
    <ContainerHeader>
      <Logo>
        <img data-testid="logo" src={logoImg} alt='logo' />
      </Logo>

      <ContainerNav>
        <a onClick={() => navigate("/")} data-testid="home">
          <img src={home} alt='home' />
        </a>

        <a onClick={() => navigate("/bookmarks")} data-testid="bookmarks">
          <img src={bookmark} alt='bookmarks' />
        </a>

        <a onClick={() => navigate("/stories-draft")} data-testid="stories-draft">
          <img src={stories} alt='stories' />
        </a>

        <span></span>

        <a onClick={() => navigate("/new-story")} data-testid="new-story">
          <img src={write} alt='write' />
        </a>
      </ContainerNav>

      {/* <ContainerAvatar>
        <div></div>
  </ContainerAvatar> */}

      <Logout onClick={handleLogout} data-testid="sign-out">Sign out</Logout>
    </ContainerHeader>
  );
};

export default Header;