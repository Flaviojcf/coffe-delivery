import { allCoffesInformations } from "../../db/db";
import { ContainerIndividualCoffe } from "../ContainerIndividualCoffe/ContainerIndividualCoffe";
import { Container, Content } from "./styles";

export function ContentCoffe() {
  return (
    <Container>
      <span>
        <h1>Nossos cafés</h1>
      </span>
      <Content>
        {allCoffesInformations.map((coffe) => (
          <ContainerIndividualCoffe
            key={coffe.id}
            id={coffe.id}
            img={coffe.img}
            informations={coffe.informations}
            price={coffe.price}
            title={coffe.title}
            types={coffe.types.map((type)=>(type))}
          />
        ))}
      </Content>
    </Container>
  );
}
