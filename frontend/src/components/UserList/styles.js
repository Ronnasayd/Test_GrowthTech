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
  text-align: center;
  background: #fff;
  margin: 10px;
  padding: 30px;
  min-width: 280px;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.5s linear;

  opacity: 0;
  transform: scale(0);
  &.entry {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    transform: scale(1.02);
  }
  p {
    font-size: 1.5rem;
    &:nth-child(2) {
      color: rgba(0, 0, 0, 0.6);
      font-size: 1.3rem;
    }
  }
`;
