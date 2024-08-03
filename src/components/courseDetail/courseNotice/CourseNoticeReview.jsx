import { Flex } from "@components/common/flex/Flex";
import Text from "@components/common/text/Text";
import TextArea from "@components/common/textarea/TextArea";
import { Profile } from "@pages/Service/CommunityDetail/CommunityDetail.style";
import { typo } from "@styles/style";

const CourseNoticeReview = ({ content, nickname }) => {
  return (
    <Flex direction="column" gap="1rem">
      <Flex gap="1rem" align="center">
        <Profile width={"32px"} height={"32px"} />
        <Text typo={typo.bodyRg700}>{nickname}</Text>
      </Flex>
      <TextArea>{content}</TextArea>
    </Flex>
  );
};
export default CourseNoticeReview;
