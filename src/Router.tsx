import { Routes, Route } from "react-router-dom";
import { DeafaultLayout } from "./defaultLayout/DefaultLayout";
import { Cart } from "./pages/cart/Cart";

import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
