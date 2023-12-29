import { Helmet, HelmetProvider } from 'react-helmet-async';

import LoginForm from '../components/LoginForm/LoginForm';
import { Container } from './Container.styled';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Container>
          <LoginForm />
        </Container>
      </div>
    </HelmetProvider>
  );
}
