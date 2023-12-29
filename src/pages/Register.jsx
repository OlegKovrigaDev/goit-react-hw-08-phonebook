import { Helmet, HelmetProvider } from 'react-helmet-async';

import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Container } from './Container.styled';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <Container>
          <RegisterForm />
        </Container>
      </div>
    </HelmetProvider>
  );
}
