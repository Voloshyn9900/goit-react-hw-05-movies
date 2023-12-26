import toast, { Toaster } from 'react-hot-toast';
import {
  Section,
  SectionHeader,
  SectionMain,SectionFooter,
  Container,
  MainWraper,
  ItemLink,
  ListLink,
  StyledLink,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import aaa from '../hero.jpg';

export const AppLayout = () => {
  const notify = () => toast('Here is your toast.');
  console.log(aaa);
  return (
    <>
      <header>
        <SectionHeader>
          <Container>
            <nav>
              <ListLink>
                <ItemLink>
                  <StyledLink to={'/'}>Home</StyledLink>
                </ItemLink>
                <ItemLink>
                  <StyledLink to={'/movies'}>Movies</StyledLink>
                </ItemLink>
              </ListLink>
            </nav>
          </Container>
        </SectionHeader>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <SectionFooter>
          <Container></Container>
        </SectionFooter>
      </footer>

      <Toaster />
    </>
  );
};
