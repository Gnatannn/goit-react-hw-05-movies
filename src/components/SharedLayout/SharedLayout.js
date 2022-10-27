import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Link, Message, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Button>
            <Link to="/" end>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="/movies">Movies</Link>
          </Button>
        </nav>
      </Header>
      <Suspense fallback={<Message>Loading...</Message>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
