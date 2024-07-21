import YouTube from "react-youtube";
import { LecturePlayerBlock } from "./LecturePlayer.style";
import { useState, useRef, useEffect } from "react";
import { updatePlayerLatest } from "@apis/course/playerApi";
const PLAY_STATE = {
  PLAYING: 1,
};
const LecturePlayer = ({ lecture, startPoint }) => {
  const [player, setPlayer] = useState();
  const UPDATE_PERIOD = 5_000;
  let isSaving = false; //처음에만 동작하도록
  console.log(lecture);

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
    <LecturePlayerBlock>
      <YouTube
        videoId={lecture.link}
        opts={{
          width: "100%",
          height: "720px",
          playerVars: {
            autoplay: 1,
          },
        }}
        onPlay={handlePlayerPlay}
        onReady={(event) => handleReadyState(event)}
        // onReady={(event) => console.log(event.target)}
      />

      {/* <iframe
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        /> */}
    </LecturePlayerBlock>
  );
};

export default LecturePlayer;
