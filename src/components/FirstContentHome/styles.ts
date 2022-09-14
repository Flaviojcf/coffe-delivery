import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 644px;
  width: 1120px;
 
  padding: 10px 160px;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  height: 342px;
`;

export const Content = styled.div`
  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-style: normal;
    font-weight: 800;
    font-size: ${(props) => props.theme.textSizes["title-title-xl"]};
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme.textSizes["text-regular-l"]};
  }
`;

export const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ExtraContentOne = styled.div`
  display: flex;
  gap: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-text"]};
    &:first-child {
      width: 231px;
    }
    &:last-child {
      width: 310px;
    }
  }
`;

