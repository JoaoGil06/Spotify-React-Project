import React from "react";

import {
  Container,
  Left,
  Center,
  Right,
  Play,
  Next,
  Previous,
  Shuffle,
  Repeat,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <p>Album and song details</p>
      </Left>

      <Center>
        <Shuffle />
        <Previous />
        <Play fontSize="large" />
        <Next />
        <Repeat />
      </Center>

      <Right>
        <p>Volume controls</p>
      </Right>
    </Container>
  );
};

export default Footer;
