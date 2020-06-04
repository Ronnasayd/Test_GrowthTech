import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    align-self: flex-end;
    display: flex;
    img {
      height: 25px;
    }
  }
`;

export const Card = styled.div`
  line-height: 2.2rem;
  background: #fff;
  width: 85%;
  margin: 10px;
  max-width: 450px;
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
  .header {
    align-self: flex-end;
    display: flex;
    align-items: center;

    h3 {
      color: #02202b;
    }
  }
  h3 {
    color: #02202b;
    align-self: flex-end;
  }
  .user-name {
    text-align: center;
    margin-top: 15px;
    span:nth-child(2) {
      color: #49a9e2;
      margin-left: 5px;
    }
  }
  .icon-info {
    height: 20px;
    align-self: flex-end;
  }
  .person-icon {
    height: 24px;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const PersonalInfo = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const AddressInfo = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CompanyInfo = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  span:nth-child(1) {
    color: #02202b;
    font-weight: 550;
    margin-right: 5px;
  }
`;
