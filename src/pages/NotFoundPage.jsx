import { Link } from 'react-router-dom';
import { HeroCont, Title, LinkStyle } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <>
      <HeroCont>
        <Title>
          Not found page 404. <LinkStyle to={'/'}>Link to home</LinkStyle>
        </Title>
      </HeroCont>
    </>
  );
}
