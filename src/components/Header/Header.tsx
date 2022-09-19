import { AdressContainer, HeaderContainer } from "./styles";


export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src="/LogoCoffee.png" />
      </span>
      <AdressContainer>
        <div>
          <img src="/gps.png" />
          Porto Alegre, RS
        </div>
        <span>
          <img src="/shoppingCart.png"/>
        </span>
      </AdressContainer>
    </HeaderContainer>
  );
}
