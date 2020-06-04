import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: #fff;
  padding: 24px;
  text-align: end;
  animation: arise 1s linear;
  font-size: 1.2rem;
  margin-top: 20px;
  &.bottom {
    position: absolute;
    bottom: 0;
  }
  @keyframes arise {
    0% {
      opacity: 0;
      z-index: -1000;
    }
    100% {
      opacity: 1;
      z-index: 0;
    }
  }
`;
