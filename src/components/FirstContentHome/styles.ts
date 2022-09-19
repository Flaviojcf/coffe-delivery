import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 644px;
  width: 1120px;
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
  justify-content: center;
  gap: 20px;
`;

export const ExtraContentOne = styled.div`
  display: flex;

  gap: 40px;
`;

export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 270px;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const DivImagem = styled.div`
  margin: auto;
`;
