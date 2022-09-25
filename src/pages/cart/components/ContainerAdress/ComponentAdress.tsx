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
  ContentContainer,
  ContainerPayment,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

enum PaymentMethods {
  credit = "Cartão de Crédito",
  debit = "Cartão de Débito",
  money = "Dinheiro",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.nativeEnum(PaymentMethods),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData;

export function ComponentAdress() {
  const confirmOrder = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { cleanCart, cartItems } = useCart();
  const { handleSubmit, register, formState } = confirmOrder;

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

        <ContainerPayment>
          <TypesPayment>
            <input type="radio" id="teste" {...register("paymentMethod")} value="Cartão de Crédito"/>
            <label htmlFor="teste">
              <ContentContainer>
                <img src="/cartaoCredito.png" />
                Cartão de Crédito
              </ContentContainer>
            </label>
          </TypesPayment>
          <TypesPayment>
            <input type="radio" id="teste2" {...register("paymentMethod")} value="Cartão de Débito" />
            <label htmlFor="teste2">
              <ContentContainer>
                <img src="/cartaoCredito.png" />
                Cartão de Débito
              </ContentContainer>
            </label>
          </TypesPayment>
          <TypesPayment>
            <input type="radio" id="teste3" {...register("paymentMethod")} value="Dinheiro"/>
            <label htmlFor="teste3">
              <ContentContainer>
                <img src="/cartaoCredito.png" />
                Dinheiro
              </ContentContainer>
            </label>
          </TypesPayment>
        </ContainerPayment>
      </ContentPayment>
    </ContainerAdress>
  );
}
