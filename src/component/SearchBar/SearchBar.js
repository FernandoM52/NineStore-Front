import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { Container } from "./styled";

export default function SearchBar() {
  return (
    <Container>
      <form action="000">
        <input
          type="text"
        />
        <button type="submit">
          <IonIcon icon={searchOutline} />
        </button>
      </form>
    </Container>
  );
}
