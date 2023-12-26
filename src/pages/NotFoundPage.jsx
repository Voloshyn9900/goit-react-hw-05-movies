import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1>
        Not found page 404. <Link to={'/'}>Link to home</Link>{' '}
      </h1>
    </>
  );
}
