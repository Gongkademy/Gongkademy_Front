import YouTube from "react-youtube";
import { LecturePlayerBlock } from "./LecturePlayer.style";
import { useState, useRef, useEffect } from "react";
import { updatePlayerLatest } from "@apis/course/playerApi";
const PLAY_STATE = {
  PLAYING: 1,
};
const LecturePlayer = ({ lecture }) => {
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
      // player.seekTo(lecture.savePoint, true);
      isSaving = true;
      return () => clearInterval(timer);
    }
  };

  return (
    <LecturePlayerBlock>
      {/* <button type="button" onClick={() => player?.seekTo(120, true)}>
        Seek to 2 minutes
      </button> */}
      <YouTube
        videoId={"VSkkE6cKcEY"}
        opts={{
          width: "100%",
          height: "720px",
          playerVars: {
            autoplay: 1,
          },
        }}
        onPlay={handlePlayerPlay}
        onReady={(event) => setPlayer(event.target)}
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
