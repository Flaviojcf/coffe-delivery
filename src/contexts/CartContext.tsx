import { createContext, ReactNode, useState } from "react";

type TypeCartContextProvider = {
  children: ReactNode;
};

type TypeCoffeInformations = {
  img: string;
  price: string;
  title: string;
  id: string;
  amount: number;
};

export const CartContext = createContext({});

export function CartContextProvider({ children }: TypeCartContextProvider) {
  const [information, setInformation] = useState<TypeCoffeInformations>({
    amount: 0,
    id: "",
    img: "",
    price: "",
    title: "",
  });
  console.log(information);
  const [amount, setAmount] = useState(0);

  function minusAmount({ amount, id }: any) {
    if (amount <= 0) return;
    setAmount(amount - 1);
  }

  function addAmount({ amount, id }: any) {
    setAmount(amount + 1);
  }

  function onAddToCart(coffeInformations: TypeCoffeInformations) {
    setInformation({
      img: coffeInformations.img,
      price: coffeInformations.price,
      title: coffeInformations.title,
      id: coffeInformations.id,
      amount: coffeInformations.amount,
    });
  }

  return (
    <CartContext.Provider
      value={{ information, onAddToCart, minusAmount, addAmount, amount }}
    >
      {children}
    </CartContext.Provider>
  );
}
