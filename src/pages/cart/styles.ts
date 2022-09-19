import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  gap: 32px;
  width: 1120px;
  height: 591px;
`;

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 100%;
  padding: 0 40px 40px 40px;
  gap: 12px;
`;

export const ContentAdress = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 372px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;
`;

export const ContentPayment = styled.div`
  display: flex;
  width: 640px;
  height: 207px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;

`;

export const ContainerCoffeSelected = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 448px;
  height: 498px;
  padding: 40px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 44px;
`;
