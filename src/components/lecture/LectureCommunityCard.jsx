import { ChatIcon } from "@assets/svg/icons";
import { Flex } from "@components/common/flex/Flex";
import Text from "@components/common/text/Text";
import { LectureCommunityCardContainer } from "@components/lecture/LectureCommunityCard.style";
import { typo } from "@styles/style";

const LectureCommunityCard = ({ title, commentCnt, content }) => {
  return (
    <LectureCommunityCardContainer>
      <Flex direction="column" gap="0.5rem">
        <Text typo={typo.bodyLg700}>{title}</Text>
        <Text typo={typo.bodySm400}>{content}</Text>
      </Flex>
      <Flex align="center" gap="0.25rem">
        <ChatIcon width="1rem" />
        <Text typo={typo.captionRg400}>{commentCnt}</Text>
      </Flex>
    </LectureCommunityCardContainer>
  );
};

export default LectureCommunityCard;
