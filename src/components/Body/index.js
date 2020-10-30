import React from "react";

import { Container } from "./styles";
import Header from "../Header";

const Body = ({ spotify }) => {
  return (
    <Container>
      <Header spotify={spotify} />
    </Container>
  );
};

export default Body;
