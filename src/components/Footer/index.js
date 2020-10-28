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
  PlaylistPlay,
  VolumeDown,
  SongInfo,
  AlbumLogo,
} from "./styles";

import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <Container>
      <Left>
        <AlbumLogo />
        <SongInfo>
          <h4>Yeah!</h4>
          <h4>Usher</h4>
        </SongInfo>
      </Left>

      <Center>
        <Shuffle />
        <Previous />
        <Play fontSize="large" />
        <Next />
        <Repeat />
      </Center>

      <Right>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>

          <Grid item>
            <VolumeDown />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </Right>
    </Container>
  );
};

export default Footer;
