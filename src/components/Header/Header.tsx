import { AdressContainer, HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src="/LogoCoffee.png" />
      </span>
      <AdressContainer>
        <div>
        <MapPin size={22} />
          Porto Alegre, RS</div>
        <span>
          <ShoppingCart size={22} />
        </span>
      </AdressContainer>
    </HeaderContainer>
  );
}
