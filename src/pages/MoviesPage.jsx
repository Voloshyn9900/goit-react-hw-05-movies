import { fetchM } from 'api';
import { Container, MainWraper, Section } from 'components/SharedLayout.styled';

export default function MoviesPage() {
  fetchM();

  return (
    <Section>
      <Container>
        <MainWraper>
          <h1>MoviesPage</h1>
        </MainWraper>
      </Container>
    </Section>
  );
}
