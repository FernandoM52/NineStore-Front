import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { feminineClothes, masculineClothes } from "../mock/TypeOfClothes";
import ScreenWithHeader from "../components/ScreenWithHeader";
import bgFeminine from "../assets/imagens/bg-feminine-section.png";
import bgMasculine from "../assets/imagens/bg-masculine-section.png";

export default function HomePage() {
  return (
    <ScreenWithHeader>
      <StyledWraper>Encontre os melhores preços aqui!</StyledWraper>
      <ContainerHome>
        <FeminineSection>
          <TitleSection>Feminino</TitleSection>
          {feminineClothes.map((f, i) => (
            <Link
              to={`/produto/${f}`}
              key={i}
            >
              {f}
            </Link>
          ))}
        </FeminineSection>

        <MasculineSection>
          <TitleSection>Masculino</TitleSection>
          {masculineClothes.map((m, i) => (
            <Link
              to={`/produto/${m}`}
              key={i}
            >
              {m}
            </Link>
          ))}
        </MasculineSection>
      </ContainerHome>
    </ScreenWithHeader>
  );
}

const StyledWraper = styled.div`
${tw`pt-28 text-3xl`}
`;

const ContainerHome = styled.section`
${tw`flex w-full justify-between items-center`}
height: 700px
`;

const TitleSection = styled.h2`
${tw`font-medium text-4xl`}
`;

const FeminineSection = styled.section`
${tw`flex flex-col w-3/6 items-center gap-y-6 justify-center text-3xl hover:brightness-50`}
    a{
        :hover{
            background-color: white
        }
    }
background-image: url(${bgFeminine});
background-size: cover;
height: 95%;
`;

const MasculineSection = styled.section`
${tw`flex flex-col w-3/6 items-center gap-y-6 justify-center text-3xl text-white hover:brightness-50`}
    a{
        :hover{
            background-color: black;
        }
    }
background-image: url(${bgMasculine});
background-size: cover;
height: 95%;
`;
