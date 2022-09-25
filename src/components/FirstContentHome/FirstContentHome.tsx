import {
  Container,
  Content,
  DivIcon,
  DivImagem,
  ExtraContent,
  ExtraContentOne,
  Info,
} from "./styles";

export function FirstContentHome() {
  return (
    <Container>
      <Info>
        <Content>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, <br /> a
            qualquer hora
          </h2>
        </Content>
        <ExtraContent>
          <ExtraContentOne>
            <DivIcon>
              <span>
                {" "}
                <img src="/iconCart.png" />
              </span>
              <h3>Compra simples e segura</h3>
            </DivIcon>
            <DivIcon>
              <span>
                {" "}
                <img src="/iconEmbalagem.png" />
              </span>
              <h3>Embalagem mantém o café intacto</h3>
            </DivIcon>
          </ExtraContentOne>
          <ExtraContentOne>
            <DivIcon>
              <span>
                {" "}
                <img src="/iconTime.png" />
              </span>
              <h3>Entrega rápida e rastreada</h3>
            </DivIcon>
            <DivIcon>
              <span>
                {" "}
                <img src="/iconCoffe.png" />
              </span>
              <h3>O café chega fresquinho até você</h3>
            </DivIcon>
          </ExtraContentOne>
        </ExtraContent>
      </Info>
      <DivImagem>
        <img src="/Imagem.png" />
      </DivImagem>
    </Container>
  );
}
