import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerImage,
  ContainerInfo,
  ContainerText,
  OrderConfirmed,
} from "./styles";

interface AdressType {
  rua: string;
  bairro: string;
  numero: string;
  cidade: string;
  uf: string;
  paymentMethod:string;
}

interface stateType {
  state: AdressType;
}
export function Success() {
  const { state } = useLocation() as unknown as stateType;
  const navigate = useNavigate();

  console.log(state);

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

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
              Entrega em{" "}
              <strong>
                {state.rua}, {state.numero}
              </strong>{" "}
              {state.bairro} - {state.cidade}, {state.uf}
            </p>
          </div>
          <div>
            <img src="/timerBackgroundYellow.png" />
            <p>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <img src="/dolarBackgroundOrange.png" />
            <p>
              Pagamento na entrega <strong>{state.paymentMethod}</strong>
            </p>
          </div>
        </ContainerText>
        <ContainerImage>
          <img src="/illustration.png" />
        </ContainerImage>
      </ContainerInfo>
    </Container>
  );
}
