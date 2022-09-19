import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const OrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;

  & p:first-child {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: #c47f17;
  }

  & p:last-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: -20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  width: 1120px;

  align-items: center;
  justify-content: space-between;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 526px;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  border: 1px solid rgba(219, 172, 44, 1);

  & div {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574F4D;

    img {
      width: 32px;
      height: 32px;
    }

    strong {
      color: #574f4d;
      font-weight: bold;
    }
  }

  & div:nth-child(1) {
    width: 354px;
  }
  & div:nth-child(2) {
    width: 185px;
  }
  & div:nth-child(3) {
    width: 230px;
  }
`;

export const ContainerImage = styled.div``;
