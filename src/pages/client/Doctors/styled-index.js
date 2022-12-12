import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    background-color: red;
    padding: 10px 20px 11px;
    border-radius: 10px;
    margin-top: 10px;
    border: 1px solid red;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.65s;

    &:hover {
      background-color: white;
      color: red;
    }
  }
  padding-bottom: 5%;
`;
