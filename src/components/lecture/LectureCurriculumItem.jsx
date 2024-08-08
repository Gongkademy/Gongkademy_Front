import Text from "@components/common/text/Text";
import { PATH } from "@router/Constants";
import { COURSE_ID, LECUTRE_ORDER } from "@pages/Service/Lecture/constants";
import { color, typo } from "@styles/style";
import { useParams, useSearchParams } from "react-router-dom";
import {
  CheckIcon,
  ChevronRightIcon,
  DoubleArrowIcon,
} from "@assets/svg/icons";
import { LectureCurriculumItemContainer } from "@components/lecture/LectureCurriculumItem.style";
import { Flex } from "@components/common/flex/Flex";

const LectureCurriculumItem = ({ order, title, time, isCompleted, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isPlay = searchParams.get(LECUTRE_ORDER) * 1 === order;

  const lectureQueryString = `?${COURSE_ID}=${searchParams.get(
    COURSE_ID
  )}&${LECUTRE_ORDER}=${order}`;

  return (
    <LectureCurriculumItemContainer to={PATH.LECTURE + lectureQueryString}>
      <Flex gap="0.75rem" align="center">
        {isPlay ? (
          <DoubleArrowIcon width="1rem" />
        ) : (
          <CheckIcon
            width="1rem"
            stroke={isCompleted ? color.gray400 : color.black}
          />
        )}
        <Text
          typo={typo.bodyLg700}
          color={
            isCompleted ? color.gray400 : isPlay ? color.blue : color.black
          }
        >
          {order} .&nbsp; {title}
        </Text>
      </Flex>

      <Text
        typo={typo.bodyRg700}
        color={isCompleted ? color.gray400 : isPlay ? color.blue : color.black}
      >
        {Math.floor(time / 60) + "분"}
      </Text>
    </LectureCurriculumItemContainer>
  );
};

export default LectureCurriculumItem;
