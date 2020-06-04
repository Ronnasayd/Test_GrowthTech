import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  /* padding: 10px; */
  width: 100%;
  background: #fff;
  flex-wrap: wrap;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Networks = styled.div`
  @media screen and (max-width: 550px) {
    position: relative;
    right: 0px;
  }
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-around;
  a {
    border-radius: 100%;
    img {
      height: 35px;

      animation: netAnimation 0.5s linear;
      @keyframes netAnimation {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`;
export const Logo = styled.img`
  height: 80px;
  animation: animationLogo 1.2s linear;
  transition: all 0.5s linear;
  margin: 10px;
  &:hover {
    transform: scale(1.05);
  }
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
