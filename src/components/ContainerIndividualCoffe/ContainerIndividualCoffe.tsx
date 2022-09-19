import { useState } from "react";
import {
  Container,
  Info,
  Price,
  PriceUnit,
  QuantityCart,
  SpanButton,
  SpanCart,
  SpanTypes,
} from "./styles";

interface ContainerIndividualCoffe {
  id: string;
  img: string;
  types: string[];
  informations: string;
  title: string;
  price: string;
}

export function ContainerIndividualCoffe({
  img,
  informations,
  price,
  title,
  id,
  types,
}: ContainerIndividualCoffe) {
  const [amount, setAmount] = useState(0);

  function minusAmount(id: string) {
    if(amount <= 0) return
    setAmount(amount - 1);
  }

  function addAmount(id: string) {
    setAmount(amount + 1);
  }

  return (
    <Container>
      <header>
        <img src={img} />
        <SpanTypes>
          {types.map((type) => (
            <p key={type[0]}>{type.toUpperCase()}</p>
          ))}
        </SpanTypes>
      </header>

      <Info>
        <h1>{title}</h1>
        <h2>{informations}</h2>
      </Info>

      <Price>
        <PriceUnit>
          {" "}
          <span>R$</span>
          <span>{price}</span>
        </PriceUnit>
        <QuantityCart>
          <SpanButton>
            <button onClick={() => minusAmount(id)}>-</button>
            {amount}
            <button onClick={() => addAmount(id)}>+</button>
          </SpanButton>
          <SpanCart>
            <img src="/cartFillWhite.png" />
          </SpanCart>
        </QuantityCart>
      </Price>
    </Container>
  );
}
