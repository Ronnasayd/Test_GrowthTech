import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  @media screen and (max-width: 833px) {
    display: none;
  }
`;
