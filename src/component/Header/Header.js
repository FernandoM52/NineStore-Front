import { Container, IconContainer, LogoContainer } from './styled.js';
import LogoName from "../../assets/LogoName";
import SearchBar from "../SearchBar/SearchBar.js";
import { IonIcon } from '@ionic/react';
import { cartSharp } from 'ionicons/icons';
import { Link } from 'react-router-dom';

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
    )
}