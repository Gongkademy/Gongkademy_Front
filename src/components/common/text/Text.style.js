import styled from "styled-components";

export const StyledText = styled.p`
  ${(props) => props.typo === "titleRg700" && props.theme.typo.titleRg700}
  ${(props) => props.typo === "titleSm700" && props.theme.typo.titleSm700}
  ${(props) => props.typo === "subtitleRg500" && props.theme.typo.subtitleRg500}
  ${(props) => props.typo === "bodyLg400" && props.theme.typo.bodyLg400}
  ${(props) => props.typo === "bodyLg700" && props.theme.typo.bodyLg700}
  ${(props) => props.typo === "bodyRg400" && props.theme.typo.bodyRg400}
  ${(props) => props.typo === "bodyRg700" && props.theme.typo.bodyRg700}
  ${(props) => props.typo === "bodySm400" && props.theme.typo.bodySm400}
  ${(props) => props.typo === "bodySm700" && props.theme.typo.bodySm700}
  ${(props) => props.typo === "captionRg400" && props.theme.typo.captionRg400}

  color:${(props) => props.color}
`;
