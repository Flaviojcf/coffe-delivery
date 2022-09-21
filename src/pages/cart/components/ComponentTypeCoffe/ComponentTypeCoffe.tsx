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
  const {addAmountInCart}:any = useCart()

  function handleAddAmount(id:any){
    addAmountInCart(id)
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
                <button>-</button>
                {cart.amount}
                <button onClick={()=>handleAddAmount(cart.id)}>+</button>
              </SpanButton>
              <ContainerRemove>
                <img src="/trash.png" />
                <p>Remover</p>
              </ContainerRemove>
            </ContainerButton>
          </ContainerTypeCoffeInformation>
          <ContainerPrice>
            <p>R${cart.price * cart.amount}</p>
          </ContainerPrice>
        </ContainerTypeCoffe>
      ))}
    </>
  );
}
