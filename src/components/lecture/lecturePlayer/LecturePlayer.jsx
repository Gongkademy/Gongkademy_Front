import { LecturePlayerBlock } from "./LecturePlayer.style";

const LecturePlayer = ({ lecture }) => {
  return (
    <LecturePlayerBlock>
      <iframe
        width="100%"
        height={720}
        src={"https://www.youtube.com/embed/" + lecture.url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </LecturePlayerBlock>
  );
};

export default LecturePlayer;
