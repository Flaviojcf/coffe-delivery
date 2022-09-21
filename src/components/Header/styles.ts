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
    color: ${(props) => props.theme.colors["brand-purple-dark"]};
    border-radius: 8px;
   
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;

    width: 146px;
    height: 38px;
    gap: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  & span:first-child {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    color: ${(props)=>props.theme.colors["base-white"]};
    top: calc(-1.25rem/2);
    right: calc(-1.25rem/2);
    background: ${(props)=>props.theme.colors["brand-yellow-dark"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }


  & span:last-child {
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    background: ${(props) => props.theme.colors["brand-yellow-light"]};
    position: relative;
    border-radius: 9px;

    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
    }
  }
`;
