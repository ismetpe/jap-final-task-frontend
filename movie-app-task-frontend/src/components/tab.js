import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  background: ##162741;
  font-family: Open Sans;
  height: 3em;
  width:30%;
  margin:auto;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #black" : "")};
  border-radius: 10px;
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "#131b20" : "lightgray")};
  color:${props => (props.active ? "white" : "black")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
    color:black;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
