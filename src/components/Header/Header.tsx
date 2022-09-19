import { Link } from "react-router-dom";
import { AdressContainer, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <Link to="/">
          <img src="/LogoCoffee.png" /> /
        </Link>
      </span>
      <AdressContainer>
        <div>
          <img src="/gps.png" />
          Porto Alegre, RS
        </div>
        <span>
          <Link to="/cart">
            <img src="/shoppingCart.png" />
          </Link>
        </span>
      </AdressContainer>
    </HeaderContainer>
  );
}
