import { createContext, ReactNode, useState } from "react";
import { produce } from "immer";
import { allCoffesInformations } from "../db/db";

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
  const [amount, setAmount] = useState(0);

  const [cartItems, setCartItems] = useState<TypeCoffeInformations[]>([]);
  const cartLength = cartItems.length;

  function onAddToCart(coffe: TypeCoffeInformations) {
    const CoffeAlreadyExists = cartItems.findIndex(
      (carItem) => carItem.id === coffe.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (CoffeAlreadyExists < 0) {
        draft.push(coffe);
      } else {
        draft[CoffeAlreadyExists].amount += coffe.amount;
      }
    });
    setCartItems(newCart);
  }

  function addAmountInCart(id: string) {
    
  }
  

  return (
    <CartContext.Provider
      value={{ onAddToCart, amount, cartItems, cartLength, addAmountInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
