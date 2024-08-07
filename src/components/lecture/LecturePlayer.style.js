import styled from "styled-components";

export const LecturePlayerBlock = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 68.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 16 / 9;
  iframe {
    position: absolute;
    aspect-ratio: 16 / 9;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 68.75rem;
    height: 100%;
  }
`;
