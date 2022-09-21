import { useCart } from "../../../../hooks/useCart";
import {
  ContainerButton,
  ContainerPrice,
  ContainerRemove,
  ContainerTypeCoffe,
  ContainerTypeCoffeInformation,
  SpanButton,
} from "./styles";

export function ComponentTypeCoffe() {
  const { cartItems }: any = useCart();

  return (
    <>
      {cartItems.map((cart: any) => (
        <ContainerTypeCoffe key={cart.id}>
          <img src={cart.img} alt="" />
          <ContainerTypeCoffeInformation>
            <p>{cart.title}</p>
            <ContainerButton>
              <SpanButton>
                <button>-</button>0<button>+</button>
              </SpanButton>
              <ContainerRemove>
                <img src="/trash.png" />
                <p>Remover</p>
              </ContainerRemove>
            </ContainerButton>
          </ContainerTypeCoffeInformation>
          <ContainerPrice>
            <p>{cart.price}</p>
          </ContainerPrice>
        </ContainerTypeCoffe>
      ))}
    </>
  );
}
