import { styled } from "styled-components";
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;
  gap: 1rem;
  border-bottom: 1px solid black;

  ${(props) =>
    props.isReply && `width: calc(100% - 3rem); align-self: flex-end;`}
`;
export const SubReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  padding-left: 3rem;
  gap: 1rem;
  border-bottom: 1px solid black;
`;
