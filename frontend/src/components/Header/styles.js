import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;
export const Logo = styled.img`
  animation: animationLogo 1.2s linear;
  @keyframes animationLogo {
    0% {
      opacity: 0;
      transform: translateY(-100vh) rotate(180deg) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) rotate(0deg) scale(1);
    }
  }
`;
