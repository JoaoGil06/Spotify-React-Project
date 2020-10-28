import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  min-width: 230px;
  background: #040404;
  color: #fff;
  padding: 0 10px;

  flex: 0.2;

  > hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`;

export const Logo = styled.img`
  height: 70px;
  margin-right: auto;
  padding: 10px;
`;

export const Title = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
`;
