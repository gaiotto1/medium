import React from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from '../../services/firebase';

import { ContainerHeader, Logo, ContainerNav, Logout } from './styles';

import logoImg from "../../assets/logo.png";
import home from "../../assets/home.svg";
import bookmark from "../../assets/bookmark.svg";
import stories from "../../assets/your-stories.svg";
import write from "../../assets/write.svg";

const Header = () => {
  const navigate = useNavigate();

  function handleLogout() {
    auth.signOut();
    navigate('/signin');
  }

  return (
    <ContainerHeader>
      <Logo>
        <img src={logoImg} alt='logo' />
      </Logo>

      <ContainerNav>
        <a onClick={() => navigate("/")}>
          <img src={home} alt='home' />
        </a>

        <a onClick={() => navigate("/bookmarks")}>
          <img src={bookmark} alt='bookmarks' />
        </a>

        <a onClick={() => navigate("/stories-draft")}>
          <img src={stories} alt='stories' />
        </a>

        <span></span>

        <a onClick={() => navigate("/new-story")}>
          <img src={write} alt='write' />
        </a>
      </ContainerNav>

      {/* <ContainerAvatar>
        <div></div>
  </ContainerAvatar> */}

      <Logout onClick={handleLogout}>Sign out</Logout>
    </ContainerHeader>
  );
};

export default Header;