import { Routes, Route } from "react-router-dom";
import { DeafaultLayout } from "./defaultLayout/DefaultLayout";
import { Cart } from "./pages/CartPage/Cart";

import { Home } from "./pages/Home/Home";
import { Success } from "./pages/Success/Sucess";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cartItems" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
