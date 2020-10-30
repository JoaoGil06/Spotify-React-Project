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
        <Body spotify={spotify} />
      </Content>
      <Footer />
    </Container>
  );
};

export default Player;
