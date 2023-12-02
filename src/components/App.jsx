import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Title from './Title/Title';
import { Filter } from './Filter/Filter';
import List from './List/List';
const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleSubmit = data => {
    const { name } = data;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contactcs!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };

    setContacts(prevState => [...prevState, newContact]);
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <>
      <Title title="Phonebook"></Title>
      <Form handleSubmit={handleSubmit} />
      <Title title="Contacts"></Title>
      <Filter value={filter} handleFilter={handleFilter} />
      <List getContacts={getContacts} deleteContact={deleteContact}></List>
    </>
  );
};
export default App;
