import styled from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

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
`;

export const Center = styled.div`
  flex: 0.4;

  padding: 0 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

export const Right = styled.div`
  flex: 0.3;
`;

export const Play = styled(PlayCircleOutlineIcon)``;
export const Next = styled(SkipNextIcon)``;
export const Previous = styled(SkipPreviousIcon)``;
export const Shuffle = styled(ShuffleIcon)``;
export const Repeat = styled(RepeatIcon)``;
