import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Title from './Title/Title';
import { Filter } from './Filter/Filter';
import List from './List/List';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = data => {
    const { name, number } = data;

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contactcs!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (JSON.parse(contacts)) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  render() {
    return (
      <>
        <Title title="Phonebook"></Title>
        <Form handleSubmit={this.handleSubmit} />
        <Title title="Contacts"></Title>
        <Filter value={this.state.filter} handleFilter={this.handleFilter} />
        <List
          getContacts={this.getContacts()}
          deleteContact={this.deleteContact}
        ></List>
      </>
    );
  }
}
export default App;
