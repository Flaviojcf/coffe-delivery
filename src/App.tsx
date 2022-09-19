import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
