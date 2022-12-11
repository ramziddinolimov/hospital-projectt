import styled from "styled-components";
export const Wrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 10px 0;
    li {
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: black;
        font-weight: 500;
        transition: 0.65s;

        &:hover {
            color: #34e065;
        }
      }
    }
  }
`;
