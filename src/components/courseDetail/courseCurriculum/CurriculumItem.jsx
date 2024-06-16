import { CheckIcon } from "@assets/svg/icons";
import Text from "@components/common/text/Text";
import { color } from "../../../styles/palette";
import { Flex } from "../../common/flex/Flex";
import { Link } from "react-router-dom";
import { PATH } from "../../../router/Constants";
import { COURSE_ID, LECTURE_ID } from "../../../pages/Lecture/constants";
const CurriculumItem = ({ isCompleted }) => {
  const lectureQueryString = `?${LECTURE_ID}=${1}&${COURSE_ID}=${1}`;
  return (
    <Link to={PATH.LECTURE + lectureQueryString}>
      <Flex
        as="li"
        align="center"
        justify="space-between"
        padding="1rem 0"
        style={{ borderBottom: `1px solid ${color.gray400}` }}
      >
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
      </Flex>
    </Link>
  );
};

export default CurriculumItem;
