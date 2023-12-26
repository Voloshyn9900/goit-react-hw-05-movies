import {
  Container,
  SectionMain,
  MainWraper,
} from 'components/SharedLayout.styled';

export default function HomePage() {
  return (
    <>
      <SectionMain>
        <Container>
          <MainWraper>
            <h1>HomePage</h1>
          </MainWraper>
        </Container>
      </SectionMain>
    </>
  );
}
