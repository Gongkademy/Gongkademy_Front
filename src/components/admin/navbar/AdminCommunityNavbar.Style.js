import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  margin-left: 216px;
  margin-top: 48px;
  gap: 40px;
`;
export const StyledDiv = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  font-size: 24px;
  font-weight: bolder;
  color: ${(props) => (props.active ? "black" : "rgb(132,136,144)")};
  border-bottom: ${(props) => props.active && "2px solid black"};
`;
