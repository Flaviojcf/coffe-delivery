import { ContainerIndividualCoffe } from "../ContainerIndividualCoffe/ContainerIndividualCoffe";
import { Container, Content } from "./styles";
import { v4 as uuidv4 } from "uuid";

export function ContentCoffe() {
  return (
    <Container>
      <span>
        <h1>Nossos cafés</h1>
      </span>
      <Content>
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/expressoTradicional.png"
          types={["Tradicional"]}
          title="Expresso Tradicional"
          informations="O tradicional café feito com água quente e grãos moídos"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/expressoAmericano.png"
          types={["Tradicional"]}
          title="Expresso Americano"
          informations="Expresso diluído, menos intenso que o tradicional"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/expressoCremoso.png"
          types={["Tradicional"]}
          title="Expresso Cremoso"
          informations="Café expresso tradicional com espuma cremosa"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/expressoGelado.png"
          types={["Tradicional", "Gelado"]}
          title="Expresso Gelado"
          informations="Bebida preparada com café expresso e cubos de gelo"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/cafeComLeite.png"
          types={["Tradicional", "Com Leite"]}
          title="Café com Leite"
          informations="Meio a meio de expresso tradicional com leite vaporizado"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/latte.png"
          types={["Tradicional", "Com Leite"]}
          title="Latte"
          informations="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/capuccino.png"
          types={["Tradicional", "Com Leite"]}
          title="Capuccino"
          informations="Bebida com canela feita de doses iguais de café, leite e espuma"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/macchiato.png"
          types={["Tradicional", "Com Leite"]}
          title="Macchiato"
          informations="Café expresso misturado com um pouco de leite quente e espuma"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/mocaccino.png"
          types={["Tradicional", "Com Leite"]}
          title="Mocaccino"
          informations="Café expresso com calda de chocolate, pouco leite e espuma"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/chocolateQuente.png"
          types={["Tradicional", "Com Leite"]}
          title="Chocolate Quente"
          informations="Bebida feita com chocolate dissolvido no leite quente e café"
          price="9.90"
        />

        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/cubano.png"
          types={["Especial", "Alcoólico", "Gelado"]}
          title="Cubano"
          informations="Drink gelado de café expresso com rum, creme de leite e hortelã"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/havaiano.png"
          types={["Especial"]}
          title="Havaiano"
          informations="Bebida adocicada preparada com café e leite de coco"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/arabe.png"
          types={["Especial"]}
          title="Árabe"
          informations="Bebida preparada com grãos de café árabe e especiarias"
          price="9.90"
        />
        <ContainerIndividualCoffe
          id={uuidv4()}
          img="/irlandes.png"
          types={["Especial", "Alcoólico"]}
          title="Irlândes"
          informations="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          price="9.90"
        />
      </Content>
    </Container>
  );
}
