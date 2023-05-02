import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function SubHeader() {
  return (
    <Container>
      <Link to="/feminino">
        FEMININO
      </Link>
      <Link to="/masculino">
        MASCULINO
      </Link>
      <Link to="/infantil">
        INFANTIL
      </Link>
      <Link to="/casa">
        CASA
      </Link>
      <Link to="/marcas">
        MARCAS
      </Link>
    </Container>
  );
}
