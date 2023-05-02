import { Container } from "./styled";
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

export default function SearchBar() {
    return (
        <Container>
            <form action="000">
                <input></input>
                <button type="submit">
                    <IonIcon icon={searchOutline}/>
                </button>    
            </form>
        </Container>
    )
}