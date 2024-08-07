import YouTube from "react-youtube";
import { LecturePlayerBlock } from "./LecturePlayer.style";
import { useState, useRef, useEffect } from "react";
import { updatePlayerLatest } from "@apis/course/playerApi";
import { Flex } from "@components/common/flex/Flex";

const PLAY_STATE = {
  PLAYING: 1,
};
const LecturePlayer = ({ lecture, startPoint }) => {
  const [player, setPlayer] = useState();
  const UPDATE_PERIOD = 5_000;
  let isSaving = false; //처음에만 동작하도록

  const handlePlayerPlay = () => {
    if (!isSaving) {
      let timer = setInterval(() => {
        if (player.getPlayerState() === PLAY_STATE.PLAYING) {
          updatePlayerLatest({
            lectureId: lecture.lectureId,
            savePoint: player.getCurrentTime(),
          }).then((response) => console.log(response));
        }
      }, UPDATE_PERIOD);
      isSaving = true;
      return () => clearInterval(timer);
    }
  };

  const handleReadyState = (event) => {
    setPlayer(event.target);
    event.target.seekTo(startPoint, true);
  };

  return (
    <Flex padding="3rem">
      <LecturePlayerBlock>
        <YouTube
          videoId={lecture.link}
          opts={{
            width: "100%",
            "aspect-ratio": 16 / 9,
            playerVars: {
              autoplay: 1,
              rel: 0, //관련동영상 없애기
              modestbranding: 1,
              controls: 1,
            },
          }}
          onPlay={handlePlayerPlay}
          onReady={(event) => handleReadyState(event)}
        />
      </LecturePlayerBlock>
    </Flex>
  );
};

export default LecturePlayer;
