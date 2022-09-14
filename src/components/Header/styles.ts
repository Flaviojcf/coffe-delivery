import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  width: 1120px;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const AdressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  div {
    background: ${(props) => props.theme.colors["brand-purple-light"]};
    color: ${(props) => props.theme.colors["brand-purple"]};
    border-radius: 8px;

    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 143px;
    height: 38px;
    gap: 4px;
  }

  span {
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    background: ${(props) => props.theme.colors["brand-yellow-light"]};

    border-radius: 9px;

    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
