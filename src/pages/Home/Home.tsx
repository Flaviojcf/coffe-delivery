import { ContentCoffe } from "../../components/ContentCoffe/ContentCoffe";
import { FirstContentHome } from "../../components/FirstContentHome/FirstContentHome";
import { Container } from "./styles";
export function Home() {
  return (
    <Container>
      <FirstContentHome />
      <ContentCoffe />
    </Container>
  );
}
