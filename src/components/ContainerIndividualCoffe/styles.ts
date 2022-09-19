import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 236px;
  max-height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors["base-card"]};

  header {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const SpanTypes = styled.span`
  display: flex;
  gap: 4px;

  p {
    background-color: red;
    height: 21px;
    width: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    background: ${(props) => props.theme.colors["brand-yellow-light"]};

    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    color: ${(props) => props.theme.colors["base-label"]};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    max-width: 210px;
    flex-wrap: wrap;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PriceUnit = styled.span`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme.colors["base-text"]};
  display: flex;
  align-items: center;
  gap: 2px;

  span:first-child {
    margin-top: 2px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-text"]};

    text-align: right;
  }
`;

export const QuantityCart = styled.div`
  gap: 8px;
  cursor: pointer;
`;

export const SpanButton = styled.div`
  width: 72px;
  height: 38px;
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

export const SpanCart = styled.span`
  background: ${(props) => props.theme.colors["brand-purple-dark"]};
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors["base-card"]}; ;
`;
