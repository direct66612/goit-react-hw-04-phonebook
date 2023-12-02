import Container from './List.styled';
const List = ({ getContacts, deleteContact }) => {
  return (
    <Container>
      {getContacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className="contact__btn"
          >
            Delete
          </button>
        </li>
      ))}
    </Container>
  );
};
export default List;
