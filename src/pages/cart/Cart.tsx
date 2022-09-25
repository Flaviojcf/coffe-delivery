import { useCart } from "../../hooks/useCart";
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
  const { sumTotalAmountValue } = useCart();
  const totalAmountValue = sumTotalAmountValue();
  const delivery = 3.5;

  return (
    <Container>
      <ComponentAdress />
      <ContainerDiv>
        <ContainerCoffeSelected>
          <ComponentTypeCoffe />
          <TotalItems>
            <ItemsInformation>
              <p>Total de itens</p>
              <p>
                {!totalAmountValue
                  ? 0
                  : new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalAmountValue)}
              </p>
            </ItemsInformation>
            <ItemsInformation>
              <p>Entrega</p>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(delivery)}
              </p>
            </ItemsInformation>
            <ItemsInformation>
              <p>
                <strong>Total</strong>
              </p>
              <p>
                <strong>
                  {!totalAmountValue
                    ? new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(delivery)
                    : new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalAmountValue + delivery)}
                </strong>
              </p>
            </ItemsInformation>
          </TotalItems>
          <OrderConfirm type="submit" form="formCartAdress">
            confirmar pedido
          </OrderConfirm>
        </ContainerCoffeSelected>
      </ContainerDiv>
    </Container>
  );
}
