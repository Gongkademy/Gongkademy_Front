import Text from "@components/common/text/Text";
import {
  MyCourseCardImage,
  MyCourseProcess,
  TotalCourseProcess,
  MyCourseName,
  MyCourseContainer,
  MyCourseProcessContainer,
} from "./MyCourseCard.style";
import { color, typo } from "@styles/style";

const MyCourseCard = () => {
  return (
    <MyCourseContainer>
      <MyCourseCardImage />
      <MyCourseName>name.lecture</MyCourseName>
      <MyCourseProcessContainer>
        <TotalCourseProcess>
          <MyCourseProcess />
        </TotalCourseProcess>
        <p>30%</p>
      </MyCourseProcessContainer>
    </MyCourseContainer>
  );
};

export default MyCourseCard;
