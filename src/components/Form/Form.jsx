import { Component } from 'react';
import Container from './Form.styled';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  resetForm = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Container>
        <form onSubmit={this.resetForm} className="form">
          <p className="input__text">Name</p>
          <input
            className="input__name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="input__tel"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          <button className="input__btn" type="submit">
            Add Contact
          </button>
        </form>
      </Container>
    );
  }
}
export default Form;
