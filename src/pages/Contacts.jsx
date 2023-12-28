import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Container } from './Container.styled';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <Container>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      </HelmetProvider>
    </>
  );
}

export default Contacts;
