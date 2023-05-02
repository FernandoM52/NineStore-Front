import { Link } from "react-router-dom";
import Header from "../../component/Header/Header";
import SubHeader from "../../component/SubHeader/SubHeader";
import { ImgContainer, ImgContainer2, ChartContainer } from "./styled";
//  import Logo from "../../assets/Logo";
//  import LogoName from "../../assets/LogoName";

export default function HomePage() {
  return (
    <>
      <Header />
      <SubHeader />
      <ImgContainer>
        <div>
          <ul>
            <li>
              <Link to="/produto/feminino">
                FEMININO
              </Link>
            </li>
            <li>
              <Link to="/produto/bolsas">
                BOLSAS
              </Link>
            </li>
            <li>
              <Link to="/produto/sandalias">
                SANDÁLIAS
              </Link>
            </li>
            <li>
              <Link to="/produto/blusas">
                BLUSAS
              </Link>
            </li>
            <li>
              <Link to="/produto/vestidos">
                VESTIDOS
              </Link>
            </li>
            <li>
              <Link to="/produto/tenis">
                TÊNIS
              </Link>
            </li>
            <li>
              <Link to="/produto/lingerie">
                LINGERIE
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/produto/masculino">
                MASCULINO
              </Link>
            </li>
            <li>
              <Link to="/produto/camisetas">
                CAMISETAS
              </Link>
            </li>
            <li>
              <Link to="/produto/tenis">
                TÊNIS
              </Link>
            </li>
            <li>
              <Link to="/produto/polos">
                POLOS
              </Link>
            </li>
            <li>
              <Link to="/produto/sapatenis">
                SAPATÊNIS
              </Link>
            </li>
            <li>
              <Link to="/produto/jeans">
                JEANS
              </Link>
            </li>
            <li>
              <Link to="/produto/underwear">
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
              <Link to="/produto/esporte">
                ESPORTE
              </Link>
            </li>
            <li>
              <Link to="/produto/feminino">
                FEMININO
              </Link>
            </li>
            <li>
              <Link to="/produto/masculino">
                MASCULINO
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/produto/infantil">
                INFANTIL
              </Link>
            </li>
            <li>
              <Link to="/produto/calcados">
                CALÇADOS
              </Link>
            </li>
            <li>
              <Link to="/produto/roupas">
                ROUPAS
              </Link>
            </li>
            <li>
              <Link to="/produto/acessorios">
                ACESSÓRIOS
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/produto/casa">
                CASA
              </Link>
            </li>
            <li>
              <Link to="/produto/quarto">
                QUARTO
              </Link>
            </li>
            <li>
              <Link to="/produto/sala">
                SALA
              </Link>
            </li>
            <li>
              <Link to="/produto/feminino">
                COZINHA
              </Link>
            </li>
            <li>
              <Link to="/produto/banheiro">
                BANHEIRO
              </Link>
            </li>
          </ul>
        </div>
      </ImgContainer2>
      <ChartContainer>
        Escrevei qualquer coisa para o eslint não acusar erro no deploy - By Fernando
      </ChartContainer>
      AAAAAAAAAAAAAAAAAA
    </>
  );
}
