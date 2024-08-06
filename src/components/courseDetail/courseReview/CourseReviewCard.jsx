import { ContainerRow } from "@pages/Service/CommunityDetail/CommunityDetail.style";
import {
  LikeIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MeetballIcon,
} from "@assets/svg/icons";
import Button from "@components/common/button/Button";
import { useState } from "react";
import { color, typo } from "@styles/style";
import { Flex } from "@components/common/flex/Flex";
import Text from "@components/common/text/Text";
import Profile from "@components/common/profile/Profile";
import { ReviewContainer } from "@components/common/review/Review.style";
import Rating from "@components/common/rating/Rating";
import { ImageBox } from "@components/common/imageBox/ImageBox.style";
import DropDownList from "@components/common/dropDownList/DropDownList";
import ConfirmModal from "@components/common/modal/confirmModal/ConfirmModal";
import {
  useLikeCourseReviewMutation,
  useModifyCourseReviewMutation,
  useRemoveCourseReview,
} from "@queries/useCourseReviewQuery";
import ReviewModal from "@components/courseDetail/courseReview/ReviewModal";
import TextArea from "@components/common/textarea/TextArea";
import { useParams } from "react-router-dom";

const CourseReviewCard = ({
  content,
  nickname,
  createdTime,
  likeCount,
  profile,
  rating,
  replies,
  reviewId,
  isMine,
}) => {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const handleClickGoWriteReview = () => {
    setWriteReview(!writeReview);
  };
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const modifyCourseReview = useModifyCourseReviewMutation();
  const removeCourseReview = useRemoveCourseReview();
  const likeCourseReview = useLikeCourseReviewMutation();

  const [newRating, setNewRating] = useState();
  const [newContent, setNewContent] = useState();
  const { courseId } = useParams();

  const handleClickLike = () => {
    likeCourseReview.mutate({
      likeCateg: "REVIEW",
      courseReviewId: reviewId,
    });
    setIsLikeActive(!isLikeActive);
  };

  const [viewReview, setViewReview] = useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };

  return (
    <>
      <ConfirmModal
        title={"수강평을 삭제하시겠습니까?"}
        cautions={["삭제한 수강평은 되돌릴수없습니다."]}
        confirm={{
          text: "삭제하기",
          onClick: () => {
            removeCourseReview.mutate(reviewId, {
              onSuccess: setIsDeleteModalOpen(false),
            });
          },
        }}
        close={{
          text: "닫기",
          onClick: () => {
            setIsDeleteModalOpen(false);
          },
        }}
        isOpen={isDeleteModalOpen}
      />

      <ReviewModal
        title={"수강평을 남겨주세요"}
        confirm={{
          text: "수정하기",
          onClick: () => {
            modifyCourseReview.mutate(
              {
                reviewId: reviewId,
                data: {
                  courseId: courseId,
                  content: newContent,
                  rating: newRating,
                },
              },
              {
                onSuccess: setIsUpdateModalOpen(false),
              }
            );
          },
        }}
        close={{
          text: "닫기",
          onClick: () => {
            setIsUpdateModalOpen(false);
          },
        }}
        isOpen={isUpdateModalOpen}
      >
        <Flex direction="column" align="center" gap="1rem" width="100%">
          <Rating
            width={"1.5rem"}
            count={5}
            value={newRating}
            onChange={setNewRating}
          />
          <TextArea
            placeholder={"수강평을 작성해주세요"}
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
        </Flex>
      </ReviewModal>

      <ReviewContainer isReply={replies?.length}>
        <Flex direction="column" gap="0.5rem">
          <Flex justify="space-between">
            <Flex gap="1rem">
              <Profile
                width={"40px"}
                height={"40px"}
                src={profile}
                alt="사진"
              />
              <Text typo={typo.bodyRg700}>{nickname}</Text>
              <Text typo={typo.bodySm400} color={color.gray600}>
                {createdTime}
              </Text>
            </Flex>
            {isMine && (
              <DropDownList
                trigger={<MeetballIcon width="1.2rem" />}
                items={[
                  {
                    text: "수정하기",
                    onClick: () => {
                      setIsUpdateModalOpen(true);
                      setNewContent(content);
                      setNewRating(rating);
                    },
                  },
                  {
                    text: "삭제하기",
                    onClick: () => {
                      setIsDeleteModalOpen(true);
                    },
                  },
                ]}
              />
            )}
          </Flex>
          {rating !== undefined && (
            <Flex align="center" gap="1rem">
              <Rating width="1rem" count={5} value={rating} />
              <Text typo={typo.bodySm400}>({rating})</Text>
            </Flex>
          )}
        </Flex>
        <Text typo={typo.bodyRg400}>{content}</Text>

        <Flex gap="1rem" align="center" justify="start">
          <ImageBox width="1.5rem" height="1.5rem">
            <LikeIcon
              fill={isLikeActive ? color.pinkRed : "none"}
              stroke={isLikeActive ? "none" : color.black}
              width="1rem"
              height="1rem"
              onClick={handleClickLike}
            />
          </ImageBox>{" "}
          <Text typo={typo.bodyRg400}>{likeCount}</Text>
        </Flex>

        {replies && (
          <ContainerRow>
            <Button text onClick={handleClickViewReview}>
              {!viewReview ? (
                <ChevronDownIcon width="16" height="16" />
              ) : (
                <ChevronUpIcon width="16" height="16" />
              )}
              {replies.length}개 댓글 보기
            </Button>
            <Button text onClick={handleClickGoWriteReview}>
              <ChatIcon width="16" height="16" /> 댓글 작성하기
            </Button>
          </ContainerRow>
        )}
      </ReviewContainer>
      {writeReview && <RegistReview />}
      {viewReview &&
        replies.map((child, idx) => (
          <CourseReviewCard key={idx} content={child} />
        ))}
    </>
  );
};
export default CourseReviewCard;
