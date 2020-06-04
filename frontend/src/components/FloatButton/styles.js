import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background: #fff;
  position: fixed;
  bottom: 20px;
  right: 30px;
  transition: all 0.075s linear;
  @media screen and (max-width: 833px) {
    display: none;
  }

  &.up {
    bottom: 95px;
  }
`;
