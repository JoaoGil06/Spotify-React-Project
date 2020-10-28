import React from "react";

import { Container, Logo, Title } from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOption from "../SidebarOption";

const Sidebar = () => {
  return (
    <Container>
      <Logo src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <Title>Playlists</Title>
      <hr />

      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" />
    </Container>
  );
};

export default Sidebar;
