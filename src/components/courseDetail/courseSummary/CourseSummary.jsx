import { Flex } from "../../common/flex/Flex";
import Text from "@components/common/text/Text";
import Button from "../../common/button/Button";
import { color } from "../../../styles/style";
import { BookIcon, BookMarkIcon, StarIcon } from "@assets/svg/icons";
const CourseSummary = () => {
  return (
    <Flex direction="column" padding="1rem 0" justify="space-between">
      <Text typo="titleSm700">재료역학 전단력과 굽힘모멘트</Text>

      <Flex direction="column" gap="0.5rem">
        <Flex>
          <StarIcon width="16" fill={color.yellow} />
          <Text>{4.6}</Text>
        </Flex>

        <Flex gap="0.5rem">
          <Text typo="bodySm400">수강평</Text>
          <Text typo="bodySm700">{100}개</Text>
          <Text typo="bodySm400">수강생</Text>
          <Text typo="bodySm700">{100}명</Text>
        </Flex>

        <Flex gap="0.5rem">
          <Text typo="bodySm400">강의</Text>
          <Text typo="bodySm700">{50}개</Text>
          <Text typo="bodySm700">(18시간 30분)</Text>
        </Flex>
      </Flex>

      <Flex gap="1rem">
        <Button outline>
          <BookIcon width="16" />
          강의자료
        </Button>
        <Button outline>
          <BookMarkIcon width="16" />
          저장하기
        </Button>
      </Flex>
      <Button fill cta>
        수강하기
      </Button>
    </Flex>
  );
};

export default CourseSummary;
