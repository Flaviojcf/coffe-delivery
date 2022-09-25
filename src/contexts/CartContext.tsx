import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";

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

interface CartContextProviderProps {
  onAddToCart: (coffe: TypeCoffeInformations) => void;
  cartItems: TypeCoffeInformations[];
  cartLength: number;
  addAmountInCart: (id: string) => void;
  sumTotalAmountValue: () => number | undefined;
  minusAmountInCart: (id: string) => void;
  removeCoffeInCart: (id: string) => void;
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextProviderProps);

export function CartContextProvider({ children }: TypeCartContextProvider) {
  const [cartItems, setCartItems] = useState<TypeCoffeInformations[]>(() => {
    const storedCartItems = localStorage.getItem(
      "@cartItems-project:state-1.0.0"
    );

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });
  const cartLength = cartItems.length;

  const totalAmount = cartItems.map((item) => {
    return item.amount * 9.9;
  });

  function sumTotalAmountValue() {
    if (totalAmount.length > 0) {
      const totalAmountValue = totalAmount.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      return totalAmountValue;
    }
  }

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
    const CoffeAlreadyExists = cartItems.findIndex(
      (carItem) => carItem.id === id
    );
    const addAmount = produce(cartItems, (draft) => {
      draft[CoffeAlreadyExists].amount += 1;
    });
    setCartItems(addAmount);
  }

  function minusAmountInCart(id: string) {
    const CoffeAlreadyExists = cartItems.findIndex(
      (carItem) => carItem.id === id
    );
    const minusAmount = produce(cartItems, (draft) => {
      if (draft[CoffeAlreadyExists].amount <= 1) return;
      draft[CoffeAlreadyExists].amount -= 1;
    });
    setCartItems(minusAmount);
  }

  function removeCoffeInCart(id: string) {
    const filterRemoveCoffe = cartItems.filter((cart) => cart.id !== id);
    setCartItems(filterRemoveCoffe);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(
      "@cartItems-project:state-1.0.0",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        onAddToCart,
        cartItems,
        cartLength,
        addAmountInCart,
        sumTotalAmountValue,
        minusAmountInCart,
        removeCoffeInCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
