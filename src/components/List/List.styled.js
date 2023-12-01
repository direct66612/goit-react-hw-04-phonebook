import styled from 'styled-components';
const Container = styled('ul')`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-left: 20px;
  list-style-type: none;
  .contact__item {
    border: 1px solid #000;
    padding: 20px;
  }
`;
export default Container;
