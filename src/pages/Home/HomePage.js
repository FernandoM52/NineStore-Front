import { Link } from "react-router-dom";
import Header from '../../component/Header/Header.js'
import SubHeader from "../../component/SubHeader/SubHeader.js";
import { ImgContainer, ImgContainer2, ChartContainer } from "./styled";
import Logo from "../../assets/Logo";
import LogoName from "../../assets/LogoName";

export default function HomePage() {
    return (
        <>
            <Header />
            <SubHeader />
            <ImgContainer>
                <div>
                    <ul>
                        <li>
                            <Link>
                                FEMININO
                            </Link>
                        </li>
                        <li>
                            <Link>
                                BOLSAS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                SANDÁLIAS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                BLUSAS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                VESTIDOS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                TÊNIS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                LINGERIE
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>
                                MASCULINO
                            </Link>
                        </li>
                        <li>
                            <Link>
                                CAMISETAS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                TÊNIS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                POLOS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                SAPATÊNIS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                JEANS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                UNDERWEAR
                            </Link>
                        </li>
                    </ul>
                </div>
            </ImgContainer>
            <ImgContainer2>
                <div>
                    <ul>
                        <li>
                            <Link>
                                ESPORTE
                            </Link>
                        </li>
                        <li>
                            <Link>
                                FEMININO
                            </Link>
                        </li>
                        <li>
                            <Link>
                                MASCULINO
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>
                                INFANTIL
                            </Link>
                        </li>
                        <li>
                            <Link>
                                CALÇADOS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                ROUPAS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                ACESSÓRIOS
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>
                                CASA
                            </Link>
                        </li>
                        <li>
                            <Link>
                                QUARTO
                            </Link>
                        </li>
                        <li>
                            <Link>
                                SALA
                            </Link>
                        </li>
                        <li>
                            <Link>
                                COZINHA
                            </Link>
                        </li>
                        <li>
                            <Link>
                                BANHEIRO
                            </Link>
                        </li>
                    </ul>
                </div>
            </ImgContainer2>
            <ChartContainer>

            </ChartContainer>
            AAAAAAAAAAAAAAAAAA
        </>
    );
}