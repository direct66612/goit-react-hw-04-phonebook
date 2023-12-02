import Container from './Form.styled';
import { useState } from 'react';
const Form = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const NameChange = e => {
    setName(e.target.value);
  };
  const NumberChange = e => {
    setNumber(e.target.value);
  };
  const resetForm = e => {
    e.preventDefault();
    handleSubmit({ name, number });
    setName('');
    setNumber('');
  };
  return (
    <Container>
      <form onSubmit={resetForm} className="form">
        <p className="input__text">Name</p>
        <input
          className="input__name"
          type="text"
          name="name"
          value={name}
          onChange={NameChange}
        />
        <input
          className="input__tel"
          type="tel"
          name="number"
          value={number}
          onChange={NumberChange}
          required
        />
        <button className="input__btn" type="submit">
          Add Contact
        </button>
      </form>
    </Container>
  );
};
export default Form;
