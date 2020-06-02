import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  background: #fff;
`;
export const Logo = styled.img`
  animation: animationLogo 1.2s linear;
  @keyframes animationLogo {
    0% {
      opacity: 0;
      transform: translateX(-100vw) rotate(60deg) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0px) rotate(0deg) scale(1);
    }
  }
`;
