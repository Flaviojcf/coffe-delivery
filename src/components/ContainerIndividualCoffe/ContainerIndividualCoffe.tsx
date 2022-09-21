import { useState } from "react";
import { useCart } from "../../hooks/useCart";
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


  const CoffeInformations: ContainerIndividualCoffe = {
    img,
    informations,
    price,
    title,
    id,
    types,
  };
  const [amount, setAmount] = useState(0);
  const { onAddToCart }: any = useCart();

  function minusAmount() {
    setAmount((state) => state - 1);
  }

  function addAmount() {
    setAmount((state) => state + 1);
  }

  function handleAddToCart() {
    const coffeToAdd = {
      ...CoffeInformations,
      amount: 1
    };
    onAddToCart(coffeToAdd);
    console.log(coffeToAdd)
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
            <button onClick={minusAmount}>-</button>
            {amount}
            <button onClick={addAmount}>+</button>
          </SpanButton>
          <SpanCart onClick={handleAddToCart}>
            <img src="/cartFillWhite.png" />
          </SpanCart>
        </QuantityCart>
      </Price>
    </Container>
  );
}
