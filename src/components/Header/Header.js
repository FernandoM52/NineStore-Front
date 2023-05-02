import { IonIcon } from "@ionic/react";
import { cartSharp } from "ionicons/icons";
import { Link } from "react-router-dom";
import { Container, IconContainer, LogoContainer } from "./styled";
import LogoName from "../../assets/LogoName";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <LogoName svgHeight={30} />
        </Link>
      </LogoContainer>
      <SearchBar />
      <IconContainer>
        <IonIcon icon={cartSharp} />
      </IconContainer>
    </Container>
  );
}
