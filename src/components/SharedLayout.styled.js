import { styled } from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
z-index: 5;
  width: 100%;
  height: 55px;
  background-color: black;
  position: sticky;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 70px;
  height: 100%;
  color: white;
  font-family: 'Sen', sans-serif;
`;

export const LogoCont = styled.div``;

export const Logo = styled.h1`
  font-size: 28px;
  color: #4dbf00;
`;

export const MenuCont = styled.div``;

export const ListLink = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ItemLink = styled.li``;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    /* font-weight: 600; */
    border-bottom: 3px solid #4dbf00;
  }

  &.active {
    font-weight: 600;
    border-bottom: 3px solid #4dbf00;
  }
`;

export const ProfileCont = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgProfile = styled.img`
  margin-right: 15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  background: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url('./img/Profile.jpg');

  object-fit: cover;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

//SIDEBAR

export const Sidebar = styled.div`
  width: 55px;
  height: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ListIcon = styled.ul`
`;

export const ItemIcon = styled.li`
  color: white;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 40px;
  text-decoration: none;
`;

export const IconLink = styled(NavLink)`
  color: white;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    /* font-weight: 600; */
    border-bottom: 3px solid #4dbf00;
  }

  &.active {
    font-weight: 600;
    border-bottom: 3px solid #4dbf00;
  }
`;

//MAIN

export const Main = styled.main`
  background-color: #151515;
  min-height: calc(100vh - 55px);
  color: white;

  /* Стилизация вебкитовского скроллбара */
  &::-webkit-scrollbar {
    width: 12px; /* Ширина скроллбара */
  }

  /* Трек скроллбара */
  &::-webkit-scrollbar-track {
    background-color: #151515; /* Цвет фона трека */
  }

  /* Цвет ручки (ползунка) скроллбара */
  &::-webkit-scrollbar-thumb {
    background-color: black; /* Цвет ручки скроллбара */
    border-radius: 6px; /* Закругление углов ручки */
    border: 3px solid #151515; /* Обводка ручки скроллбара */
  }
`;

export const MainWrap = styled.div`
  background-color: #151515;
  margin-left: 55px;
  /* min-height: calc(100vh - 55px - 55px); */


`;

//FOOTER

export const Footer = styled.footer`
  width: calc(100% - 55px);
  height: 55px;
  display: flex;
  /* position: fixed; */
  bottom: 0;
  left: 0;

  justify-content: center;
  align-items: center;

  color: white;
  margin-left: 55px;
  background-color: black;
`;


// -------------------------------------------------



