import React from "react";

import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

const Player = ({ spotify }) => {
  return (
    <Container>
      <Content>
        <Sidebar />
        <Body />
      </Content>
      <Footer />
    </Container>
  );
};

export default Player;
