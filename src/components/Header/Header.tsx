import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { AdressContainer, HeaderContainer } from "./styles";

export function Header() {
  const {cartLength} = useCart()
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
            <span>{cartLength}</span>
            <img src="/shoppingCart.png" />
          </Link>
        </span>
      </AdressContainer>
    </HeaderContainer>
  );
}
