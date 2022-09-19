import {
  Container,
  ContainerAdress,
  ContainerCoffeSelected,
  ContentAdress,
  ContentPayment,
} from "./styles";

export function Cart() {
  return (
    <Container>
      <ContainerAdress>
        <ContentAdress>
          <div>
            <h2>Endereço de Entrega</h2>
          </div>
          <form>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </form>
        </ContentAdress>
        <ContentPayment></ContentPayment>
      </ContainerAdress>
      <ContainerCoffeSelected></ContainerCoffeSelected>
    </Container>
  );
}
