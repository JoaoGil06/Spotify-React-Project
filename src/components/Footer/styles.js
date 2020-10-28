import styled from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background: #282828;
  padding: 20px;

  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: #fff;
  width: 300px;
`;

export const AlbumLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

export const SongInfo = styled.div`
  > h4 {
    margin-bottom: 5px;
  }

  > p {
    font-size: 12px;
  }
`;

export const Center = styled.div`
  flex: 0.4;

  padding: 0 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 425px;
`;

export const Right = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  & * .MuiSlider-root {
    color: green;
  }
`;

export const Play = styled(PlayCircleOutlineIcon)`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Next = styled(SkipNextIcon)`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Previous = styled(SkipPreviousIcon)`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Shuffle = styled(ShuffleIcon)`
  color: #1ed15e;

  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const Repeat = styled(RepeatIcon)`
  color: #1ed15e;

  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const PlaylistPlay = styled(PlaylistPlayIcon)`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;

export const VolumeDown = styled(VolumeDownIcon)`
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;
