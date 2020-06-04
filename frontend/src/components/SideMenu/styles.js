import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 30px;
  top: 110px;
  transition: all 0.075s linear;
  @media screen and (max-width: 833px) {
    flex-direction: row;
    position: relative;
    top: 0px;
    right: 0px;
    transition: none;
  }
  &.up {
    top: 10px;
  }
`;
export const ItemMenu = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  background: #fff;
  border-radius: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    height: 30px;
  }
  @media screen and (max-width: 833px) {
    height: 50px;
    width: 50px;
    margin: 10px;
    & img {
      height: 25px;
    }
  }
`;
