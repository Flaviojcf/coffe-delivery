import { Container, Info, Price } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function ContainerIndividualCoffe() {
  return (
    <Container>
      <header>
        <img src="/Coffee.png" />
        <span>Tradicional</span>
      </header>

      <Info>
        <h1>Expresso Tradicional</h1>
        <h2>
          O tradicional café feito com água <br /> quente e grãos moídos
        </h2>
      </Info>

      <Price>
        <span> R$ 9,90 </span>
        <div>
          <span>
            <button>-</button> 1 <button>+</button>
          </span>
          <span>{<ShoppingCart size={22} />}</span>
        </div>
      </Price>
    </Container>
  );
}
