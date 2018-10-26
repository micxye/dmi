import styled from 'styled-components';

const SubmitButton = styled.input`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  height: 30px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid black;
  color: black;
  transition: all 150ms linear;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
    background: black;
  }
  &:show {
    background: grey;
  }
  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
    background: grey;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
    color: #fff;
  }
`;

export default SubmitButton;
