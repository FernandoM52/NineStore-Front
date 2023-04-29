import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export default function ScreenWithHeader({ children }) {
  return (
    <Container>
      <Header >
        <Link to={"/home"}>
          <div>NINE STORE</div>
        </Link>

        <h1>Bem vindo à nossa loja online!</h1>

        <NavUser>
          <Link to={"/login"}>
            <p>Entrar</p>
          </Link>
          <div></div>
          <Link to={"/cadastro"}>
            <p>Criar uma conta</p>
          </Link>
          <div></div>
          <Link to={"/cadastro"}>
            <p>Sobre</p>
          </Link>
        </NavUser>
      </Header>
      {children}
    </Container>
  )
};

const Container = styled.div`
${tw`flex flex-col box-border items-center justify-items-center`}
`;

const Header = styled.header`
${tw`flex w-full h-20 fixed z-10 justify-between justify-items-center items-center mx-auto border-solid border-b-4 drop-shadow-md text-2xl`}
top: 0;

    >h1{
        ${tw`font-bold ml-72`}
    }
`;

const NavUser = styled.div`
${tw`flex gap-x-8 items-center mr-8`}

    p{
        ${tw`cursor-pointer font-bold`}
    }
    div{
        ${tw`w-px h-6 bg-gray-200`}
    }
`;
