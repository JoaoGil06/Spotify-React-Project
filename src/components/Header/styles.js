import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Left = styled.div`
  flex: 0.5;
  min-width: 70px;

  background: #fff;
  color: gray;
  border-radius: 30px;
  padding: 10px;

  display: flex;
  align-items: center;

  > input {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin-left: 10px;
  }
`;

export const Search = styled(SearchIcon)``;
