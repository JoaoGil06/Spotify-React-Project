import React from "react";

import { Container, Title, HeadlineTitle } from "./styles";

const SidebarOption = ({ title, Icon }) => {
  return (
    <Container>
      {Icon && <Icon />}
      {Icon ? <HeadlineTitle>{title}</HeadlineTitle> : <Title>{title}</Title>}
    </Container>
  );
};

export default SidebarOption;
