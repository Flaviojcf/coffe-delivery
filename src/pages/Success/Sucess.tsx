import {
  Container,
  ContainerImage,
  ContainerInfo,
  ContainerText,
  OrderConfirmed,
} from "./styles";

export function Success() {
  return (
    <Container>
      <OrderConfirmed>
        <p>Uhu! Pedido confirmado</p>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderConfirmed>
      <ContainerInfo>
        <ContainerText>
          <div>
            <img src="/gpsBackgroundBlue.png" />
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos - Porto
              Alegre, RS
            </p>
          </div>
          <div>
            <img src="/timerBackgroundYellow.png" />
            <p>Previsão de entrega <strong>20 min - 30 min</strong></p>
          </div>
          <div>
            <img src="/dolarBackgroundOrange.png" />
            <p>Pagamento na entrega <strong>Cartão de Crédito</strong></p>
          </div>
        </ContainerText>
        <ContainerImage>
          <img src="/illustration.png" />
        </ContainerImage>
      </ContainerInfo>
    </Container>
  );
}
