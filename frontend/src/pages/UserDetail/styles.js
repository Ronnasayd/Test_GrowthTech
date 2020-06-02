import styled from "styled-components";

export const Container = styled.div`
  line-height: 2.2rem;
  background: #fff;
  width: 85%;
  margin: 10px;
  max-width: 600px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 20px;
  font-size: 1.6rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  animation: entryAnimation 0.5s linear;
  @keyframes entryAnimation {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  h3 {
    align-self: flex-end;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const Item = styled.div`
  display: flex;
  span:nth-child(1) {
    color: #065e80;
    font-weight: 550;
    margin-right: 5px;
  }
`;
