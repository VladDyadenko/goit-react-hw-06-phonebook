import { useEffect, useRef } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title title="Phonebook"></Title>
      <ContactForm></ContactForm>
      <div>
        <Title title="Contacts"></Title>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
