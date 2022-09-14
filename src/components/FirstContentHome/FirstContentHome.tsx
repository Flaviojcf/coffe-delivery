import {
  Container,
  Content,
  ExtraContent,
  ExtraContentOne,
  Info,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

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
            <div>
              <span>
                {" "}
                <ShoppingCart size={22} />
              </span>
              <h3>Compra simples e segura</h3>
            </div>
            <div>
              <span>
                {" "}
                <ShoppingCart size={22} />
              </span>
              <h3>Embalagem mantém o café intacto</h3>
            </div>
          </ExtraContentOne>
          <ExtraContentOne>
            <div>
              <span>
                {" "}
                <ShoppingCart size={22} />
              </span>
              <h3>Entrega rápida e rastreada</h3>
            </div>
            <div>
              <span>
                {" "}
                <ShoppingCart size={22} />
              </span>
              <h3>O café chega fresquinho até você</h3>
            </div>
          </ExtraContentOne>
        </ExtraContent>
      </Info>
      <div>
        <img src="/Imagem.png" />
      </div>
    </Container>
  );
}
