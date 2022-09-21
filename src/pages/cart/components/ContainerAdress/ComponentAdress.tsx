import {
  ContentAdress,
  ContainerAdress,
  AdressDelivery,
  Cep,
  Street,
  ContentInformation,
  Complement,
  ComplementAdress,
  ContentPayment,
  PaymentText,
  TypesPayment,
} from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { api } from "../../../../services/api";

interface DadosProps {
  cep: string;
  rua?: string;
  número?: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function ComponentAdress() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState<DadosProps>({
    cep: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  async function teste3() {
    try {
      const response = await api.get(`${cep}/json/`);
      setTimeout(
        () =>
          setDados({
            cep,
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            uf: response.data.uf,
          }),
        200
      );
    } catch (error) {
      toast.error("Digite um CEP Válido");
    }
  }

  return (
    <ContainerAdress>
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <ContentAdress>
        <AdressDelivery>
          <div>
            <img src="/gpsAmarelo.png" />
            <span>Endereço de Entrega</span>
          </div>
          <div>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AdressDelivery>
        <form>
          <Cep>
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onBlur={teste3}
              onChange={(e) => setCep(e.target.value)}
            />
          </Cep>
          <Street>
            <input type="text" placeholder="Rua" />
          </Street>
          <ContentInformation>
            <Complement>
              <input type="text" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento"
                defaultValue={dados.complemento}
              />
            </Complement>
            <ComplementAdress>
              <input
                type="text"
                placeholder="Bairro"
                defaultValue={dados.bairro}
              />
              <input
                type="text"
                placeholder="Cidade"
                defaultValue={dados.cidade}
              />
              <input type="text" placeholder="UF" defaultValue={dados.uf} />
            </ComplementAdress>
          </ContentInformation>
        </form>
      </ContentAdress>
      <ContentPayment>
        <PaymentText>
          <span>
            <img src="/dolarSimbol.png" />
            <h1>Pagamento</h1>
          </span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </PaymentText>

        <TypesPayment>
          <div>
            <img src="/cartaoCredito.png" alt="" />
            <p>Cartão de crédito</p>
          </div>
          <div>
            <img src="/cartaoDebito.png" alt="" />
            <p>cartão de débito</p>
          </div>
          <div>
            <img src="/dinheiro.png" alt="" />
            <p>dinheiro</p>
          </div>
        </TypesPayment>
      </ContentPayment>
    </ContainerAdress>
  );
}
