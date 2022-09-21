import styled from "styled-components";

export const ContainerTypeCoffe = styled.div`
  display: flex;
  width: 368px;
  height: 90px;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 24px;
  justify-content: space-between;
`;

export const ContainerTypeCoffeInformation = styled.div`
  & p:first-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #403937;
  }
`;

export const SpanButton = styled.div`
  display: flex;
  align-items: center;
  width: 72px;
  height: 32px;
  background: ${(props) => props.theme.colors["base-button"]};
  gap: 3px;

  button {
    border: none;
    background: ${(props) => props.theme.colors["base-button"]};
    color: ${(props) => props.theme.colors["brand-purple"]};
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContainerRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 32px;
  background: ${(props) => props.theme.colors["base-button"]};
  gap: 4px;
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: #574f4d;

  & img {
    width: 16px !important;
    height: 16px !important;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  text-align: start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`;
