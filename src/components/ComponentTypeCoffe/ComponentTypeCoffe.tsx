import { useCart } from "../../hooks/useCart";
import {
  ContainerButton,
  ContainerPrice,
  ContainerRemove,
  ContainerTypeCoffe,
  ContainerTypeCoffeInformation,
  SpanButton,
} from "./styles";

export function ComponentTypeCoffe() {
  const { addAmountInCart, minusAmountInCart, cartItems, removeCoffeInCart } =
    useCart();

  function handleAddAmount(id: string) {
    addAmountInCart(id);
  }

  function handleMinusAmount(id: string) {
    minusAmountInCart(id);
  }

  function onRemove(id: string) {
    removeCoffeInCart(id);
  }

  return (
    <>
      {cartItems.map((cart: any) => (
        <ContainerTypeCoffe key={cart.id}>
          <img src={cart.img} alt="" />
          <ContainerTypeCoffeInformation>
            <p>{cart.title}</p>
            <ContainerButton>
              <SpanButton>
                <button onClick={() => handleMinusAmount(cart.id)}>-</button>
                {cart.amount}
                <button onClick={() => handleAddAmount(cart.id)}>+</button>
              </SpanButton>
              <ContainerRemove onClick={() => onRemove(cart.id)}>
                <img src="/trash.png" />
                <p>Remover</p>
              </ContainerRemove>
            </ContainerButton>
          </ContainerTypeCoffeInformation>
          <ContainerPrice>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(cart.price * cart.amount)}
            </p>
          </ContainerPrice>
        </ContainerTypeCoffe>
      ))}
    </>
  );
}
