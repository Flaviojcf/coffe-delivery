import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 236px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors["base-card"]};

  header {
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
