import { CheckIcon } from "@assets/svg/icons";
import Text from "@components/common/text/Text";
import { Flex } from "../../common/flex/Flex";
import { PATH } from "../../../router/Constants";
import { COURSE_ID, LECTURE_ID } from "@pages/Service/Lecture/constants";
import { CurriculumItemBlock } from "./CurriculumItem.style";
import { color } from "../../../styles/style";
const CurriculumItem = ({ isCompleted }) => {
  const lectureQueryString = `?${LECTURE_ID}=${1}&${COURSE_ID}=${1}`;
  return (
    <CurriculumItemBlock to={PATH.LECTURE + lectureQueryString}>
      <Flex gap="0.75rem" align="center">
        <CheckIcon
          width="1rem"
          stroke={isCompleted ? color.green : color.gray400}
        />
        <Text typo="bodyRg700">
          {"1"}.{"강의제목"}
        </Text>
      </Flex>

      <Text type="captionRg400" color={color.gray400}>
        {"10 분"}
      </Text>
    </CurriculumItemBlock>
  );
};

export default CurriculumItem;
