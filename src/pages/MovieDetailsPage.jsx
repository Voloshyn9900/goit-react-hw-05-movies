import { Container, Section, MainWraper } from 'components/SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <>
      <Section>
        <Container>
          <MainWraper>
            <h1>MovieDetailsPage</h1>
            <Outlet />
          </MainWraper>
        </Container>
      </Section>
    </>
  );
}
