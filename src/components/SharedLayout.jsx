import {
  ItemLink,
  ListLink,
  StyledLink,
  Header,
  Nav,
  LogoCont,
  Logo,
  MenuCont,
  ProfileCont,
  ImgProfile,
  Text,
  Sidebar,Main,
  MainWrap,
  Footer,
  ListIcon,
  ItemIcon,
  IconLink,
} from './SharedLayout.styled';

import { FaSearch, FaHome, FaUserFriends, FaHeart } from 'react-icons/fa';

import { Outlet } from 'react-router-dom';
import imgHero from '../img/Profile.jpg';

export const AppLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <LogoCont>
            <StyledLink to={'/'}>
              <Logo>TimeMovies</Logo>
            </StyledLink>
          </LogoCont>

          <MenuCont>
            <ListLink>
              <ItemLink>
                <StyledLink to={'/'}>Home</StyledLink>
              </ItemLink>
              <ItemLink>
                <StyledLink to={'/movies'}>Movies</StyledLink>
              </ItemLink>
            </ListLink>
          </MenuCont>

          <ProfileCont>
            <ImgProfile src={imgHero} alt="Profile" />
            <Text>Profile</Text>
          </ProfileCont>
        </Nav>
      </Header>

      <Sidebar>
        <ListIcon>
          <ItemIcon>
            <IconLink to={'/'}>
              <FaHome />
            </IconLink>
          </ItemIcon>

          <ItemIcon>
            <IconLink to={'/movies'}>
              <FaSearch />
            </IconLink>
          </ItemIcon>

          <ItemIcon>
            {/* <IconLink to={'/movies'}> */}
              <FaUserFriends />
            {/* </IconLink> */}
          </ItemIcon>

          <ItemIcon>
            {/* <IconLink to={'/movies'}> */}
              <FaHeart />
            {/* </IconLink> */}
          </ItemIcon>
        </ListIcon>
      </Sidebar>

      <Main>
        <MainWrap>
          <Outlet />
        </MainWrap>
      </Main>

      <Footer>
        <Text>© Copyright</Text>
      </Footer>
    </>
  );
};
