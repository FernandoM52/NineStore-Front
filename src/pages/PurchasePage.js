import styled from "styled-components";
import PurchasedProducts from "../components/PurchasedProducts";
import ScreenWithHeader from "../components/ScreenWithHeader";

export default function PurchasePage() {
  return (
    <ScreenWithHeader>
      <Container>
        <PurchaseMessageContainer>
          <p>Sua compra foi realizada com sucesso! Obrigado por comprar conosco:</p>
          <UserData>
            <p>Nome: Nome do usuário</p>
            <p>Forma de pagamento: Cŕedito/Débito</p>
            <p>Valor total: Preço total da compra</p>
          </UserData>
        </PurchaseMessageContainer>
        <PurchasedProducts />
      </Container>
    </ScreenWithHeader>
  );
}

const Container = styled.div`
display: flex;
width: 100%;
padding-top: 5rem;
`;

const PurchaseMessageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid;
border-color: rgb(229 231 235);
width: 65%;
`;

const UserData = styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;
gap: 5px;
`;
