import { Container, PurchaseMessageContainer, UserData } from "./styled";
import ScreenWithHeader from "../../components/ScreenWithHeader";
import PurchasedProducts from "../../components/PurchasedProducts/PurchasedProducts";

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
