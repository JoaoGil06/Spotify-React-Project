import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  color: grey;
  cursor: pointer;
  transition: 200ms color ease-in;

  &:hover {
    color: #fff;
  }

  > svg {
    margin: 0 10px;
  }
`;

export const HeadlineTitle = styled.h4``;

export const Title = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
`;
