import styled from "styled-components";
import {
  COURSE_THUMBNAIL_HEIGHT,
  COURSE_THUMBNAIL_WIDTH,
} from "../../constants";

export const CourseThumbnailBlock = styled.div`
  width: ${COURSE_THUMBNAIL_WIDTH};
  height: ${COURSE_THUMBNAIL_HEIGHT};
  border-radius: 1rem;
`;

export const CourseThumbnail = styled.img`
  width: ${COURSE_THUMBNAIL_WIDTH};
  height: ${COURSE_THUMBNAIL_HEIGHT};
  border-radius: 1rem;
`;

export const CourseSummaryBlock = styled.div`
  display: flex;
`;
