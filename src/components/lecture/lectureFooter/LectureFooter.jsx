import { FooterBlock } from "./LectureFooter.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@assets/svg/icons";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { useSearchParams } from "react-router-dom";
import { COURSE_ID, LECTURE_ID } from "@pages/Service/Lecture/constants";

const LectureFooter = ({ lecture }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //TODO: Reducer로 리팩토링 해보기
  return (
    <FooterBlock>
      <Flex
        align="center"
        gap="0.5rem"
        padding="0.25rem 3rem"
        onClick={() =>
          setSearchParams({
            cid: searchParams.get(COURSE_ID),
            lid: searchParams.get(LECTURE_ID) * 1 - 1,
          })
        }
      >
        <ArrowLeftIcon width={16} height={16} />
        <Text typo="bodyRg400">이전 수업</Text>
      </Flex>

      <Flex
        align="center"
        gap="0.5rem"
        padding="0.25rem 3rem"
        onClick={() =>
          setSearchParams({
            cid: searchParams.get(COURSE_ID),
            lid: searchParams.get(LECTURE_ID) * 1 + 1,
          })
        }
      >
        <Text typo="bodyRg400">다음 수업</Text>
        <ArrowRightIcon width={16} height={16} />
      </Flex>
    </FooterBlock>
  );
};

export default LectureFooter;
