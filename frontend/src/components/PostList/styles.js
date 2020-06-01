import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;
export const ListItem = styled.li`
  margin: 10px;
  padding: 30px;
  min-width: 280px;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  animation: itemAnimation 0.5s linear;

  @keyframes itemAnimation {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  p {
    font-size: 1.6rem;
  }
`;
export const ItemHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    justify-content: center;
  }
  p {
    margin-right: 5px;
    &:nth-child(2) {
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const ItemContent = styled.div`
  line-height: 2.3rem;
  h2 {
    font-size: 1.7rem;
    margin: 5px 0px;
    font-weight: 600;
    color: #065e80;
  }
  p {
    text-align: justify;
    text-justify: distribute;
  }
`;
