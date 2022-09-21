import styled from "styled-components";

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;

  width: 640px;
  height: 100%;
  box-sizing: border-box;

  &::before {
    content: "Complete seu pedido";
    margin-bottom: 15px;
    height: 20px;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
  }
`;

export const ContentAdress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 640px;
  height: 372px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;
  padding: 40px;
  box-sizing: border-box;
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & form input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;
    width: 100%;
    border-radius: 4px;
    padding: 12px;

    background: ${(props) => props.theme.colors["base-input"]};
    border: 1px solid #e6e5e5;
  }
`;

export const AdressDelivery = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 44px;
  margin-bottom: 32px;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & div:first-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #403937;
  }

  & div:last-child {
    padding-left: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    line-height: 130%;
    color: #574f4d;
  }
`;

export const Cep = styled.div`
  display: flex;
  width: 200px;
  height: 42px;
`;

export const Street = styled.div`
  display: flex;
  width: 560px;
  height: 42px;
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Complement = styled.div`
  display: flex;
  gap: 12px;
  width: 560px;
  height: 42px;

  input:first-child {
    width: 200px;
  }

  input:last-child {
    width: 348px;
  }
`;

export const ComplementAdress = styled.div`
  display: flex;
  gap: 12px;
  width: 560px;
  height: 42px;

  input:nth-child(1) {
    width: 200px;
  }
  input:nth-child(2) {
    width: 276px;
  }
  input:nth-child(3) {
    width: 60px;
  }
`;

export const ContentPayment = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 640px;
  height: 207px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;
  padding: 40px;

  & div span {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 22px;
      height: 22px;
    }

    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-text"]};
    display: flex;
    align-items: center;
  }
`;

export const PaymentText = styled.div`
  & span {
    display: flex;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #403937;
  }

  & p {
    margin-top: 1px;
    margin-left: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #574f4d;
  }
`;
export const TypesPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    gap: 12px;
    width: 180px;
    border-radius: 6px;
    height: 51px;
    background: ${(props) => props.theme.colors["base-button"]};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: #574f4d;
  }
`;
