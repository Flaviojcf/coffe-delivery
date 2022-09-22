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
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

interface ErrorsProps {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData;

export function ComponentAdress() {
  const confirmOrder = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { cleanCart, cartItems }: any = useCart();
  const { handleSubmit, register, formState } = confirmOrder;

  const { errors } = formState as unknown as ErrorsProps;

  const navigate = useNavigate();

  function onSubmit(data: ConfirmOrderFormData) {
    if (Object.keys(cartItems).length === 0) navigate("/");
    else {
      navigate("/success", {
        state: data,
      });

      cleanCart();
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
        <form onSubmit={handleSubmit(onSubmit)} id="formCartAdress">
          <Cep>
            <input
              type="text"
              placeholder="CEP"
              {...register("cep")}
              required
            />
          </Cep>
          <Street>
            <input
              type="text"
              placeholder="Rua"
              {...register("rua")}
              required
            />
          </Street>
          <ContentInformation>
            <Complement>
              <input
                type="text"
                placeholder="Número"
                {...register("numero")}
                required
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
                required
              />
            </Complement>
            <ComplementAdress>
              <input
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
                required
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
                required
              />
              <input
                type="text"
                placeholder="UF"
                {...register("uf")}
                required
              />
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
            <img src="/cartaoCredito.png" />
            Cartão de Crédito
          </div>
          <div>
            <img src="/cartaoDebito.png" />
            Cartão de Debito
          </div>
          <div>
            <img src="/dinheiro.png" />
            dinheiro
          </div>
        </TypesPayment>
      </ContentPayment>
    </ContainerAdress>
  );
}
