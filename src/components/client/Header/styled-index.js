import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1% 0;
  img {
    width: 150px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Infors = styled.div`
  width: 65%;
  margin: 0 !important;
`;

export const Nav = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    li {
      .buttonUz {
        padding: 7px 15px 4px;
        font-size: 15px;
        font-weight: 400;
        background-color: white;
        border: 1px solid #34e065;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        background-color: #34e065;
        transition: 0.65s;

        &:hover {
          box-shadow: 0px 0px 20px 0px #34e065;
        }
      }
      .buttonRu {
        padding: 7px 15px 4px;
        font-size: 15px;
        font-weight: 400;
        background-color: #3498db;
        border: 1px solid #3498db;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        transition: 0.65s;

        &:hover {
          box-shadow: 0px 0px 20px 0px #0062a3;
          color: white;
        }
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    padding: 0;
    font-weight: 500;
    
    p {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Buttons = styled.div``;
