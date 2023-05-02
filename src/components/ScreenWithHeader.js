import styled from "styled-components";
import tw from "twin.macro";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";

export default function ScreenWithHeader({ children }) {
  return (
    <Container>
      <Header />
      <SubHeader />
      {children}
    </Container>
  );
}

const Container = styled.div`
${tw`flex flex-col box-border items-center justify-items-center`}
`;
