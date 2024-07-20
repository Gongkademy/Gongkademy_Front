import { FooterBlock } from "./LectureFooter.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@assets/svg/icons";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  COURSE_ID,
  LECTURE_ID,
  LECUTRE_ORDER,
} from "@pages/Service/Lecture/constants";
import { PATH } from "@router/Constants";

const LectureFooter = ({ lecture }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const createLectureUrl = (step) => {
    return `?${COURSE_ID}=${searchParams.get(COURSE_ID)}&${LECUTRE_ORDER}=${
      searchParams.get(LECUTRE_ORDER) * 1 + step
    }`;
  };
  //TODO: Reducer로 리팩토링 해보기
  return (
    <FooterBlock>
      <Link to={PATH.LECTURE + createLectureUrl(-1)}>
        <Flex align="center" gap="0.5rem" padding="0.25rem 3rem">
          <ArrowLeftIcon width={16} height={16} />
          <Text typo="bodyRg400">이전 수업</Text>
        </Flex>
      </Link>

      <Link to={PATH.LECTURE + createLectureUrl(+1)}>
        <Flex align="center" gap="0.5rem" padding="0.25rem 3rem">
          <Text typo="bodyRg400">다음 수업</Text>
          <ArrowRightIcon width={16} height={16} />
        </Flex>
      </Link>
    </FooterBlock>
  );
};

export default LectureFooter;
