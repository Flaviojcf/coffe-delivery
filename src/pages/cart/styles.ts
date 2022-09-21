import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  gap: 32px;
  width: 1120px;
  height: 610px;
`;

export const ContainerDiv = styled.div`
  width: 640px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  
  

  &::before {
    content: "Complete seu pedido";
    height: 20px;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
  }
`;

export const ContainerCoffeSelected = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  width: 448px;
  max-height: 4060px;
  margin-top: 14px;
  padding: 40px;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 44px;

  & div img {
    width: 64px;
    height: 64px;
  }
`;

export const TotalItems = styled.div`
display: flex;
flex-direction: column;
`;

export const ItemsInformation = styled.div`
display: flex;
width: 368px;
justify-content: space-between;

& p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #574f4d;
}

& p strong {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #403937;
}
`;

export const OrderConfirm = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 8px;
gap: 4px;
width: 368px;
height: 46px;
border: none;
cursor: pointer;
background: #dbac2c;
border-radius: 6px;

font-family: "Roboto";
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 160%;
text-transform: uppercase;
color: #ffffff;
font-stretch: 100;
`;
