import { Component } from 'react';
import Header from './Title.styled';
class Title extends Component {
  render() {
    return <Header>{this.props.title}</Header>;
  }
}
export default Title;
