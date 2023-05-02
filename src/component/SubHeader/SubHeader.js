import { Container } from './styled.js';
import { Link } from 'react-router-dom';

export default function SubHeader() {
    return (
        <Container>
            <Link>
                FEMININO
            </Link>
            <Link>
                MASCULINO
            </Link>
            <Link>
                INFANTIL
            </Link>
            <Link>
                CASA
            </Link>
            <Link>
                MARCAS
            </Link>
        </Container>
    )
}