import { ComponentTypeCoffe } from "./components/ComponentTypeCoffe/ComponentTypeCoffe";
import { ComponentAdress } from "./components/ContainerAdress/ComponentAdress";
import {
  Container,
  ContainerCoffeSelected,
  ContainerDiv,
  ItemsInformation,
  OrderConfirm,
  TotalItems,
} from "./styles";

export function Cart() {
  return (
    <Container>
      <ComponentAdress />
      <ContainerDiv>
        <ContainerCoffeSelected>
          <ComponentTypeCoffe />
          <TotalItems>
            <ItemsInformation>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </ItemsInformation>
            <ItemsInformation>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </ItemsInformation>
            <ItemsInformation>
              <p>
                <strong>Total</strong>
              </p>
              <p>
                <strong>R$ 33,20</strong>
              </p>
            </ItemsInformation>
          </TotalItems>
          <OrderConfirm>confirmar pedido</OrderConfirm>
        </ContainerCoffeSelected>
      </ContainerDiv>
    </Container>
  );
}
