import React from 'react';
import Container from './Filter.styled';
export const Filter = ({ value, handleFilter }) => {
  return (
    <Container>
      <h3>Find contacts by name</h3>
      <input
        className="input__filter"
        type="text"
        name="contact_name"
        value={value}
        placeholder="Search..."
        onChange={handleFilter}
      />
    </Container>
  );
};
