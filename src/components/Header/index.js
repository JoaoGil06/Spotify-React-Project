import React from "react";

import { Container, Left, Right, Search } from "./styles";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../contexts/StateProvider";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Container>
      <Left>
        <Search />
        <input placeholder="Search for Artists, Songs, or Albuns" type="text" />
      </Left>

      <Right>
        <Avatar src={user?.images[0]?.url} alt="JG" />
        <h4>João Gil</h4>
      </Right>
    </Container>
  );
};

export default Header;
