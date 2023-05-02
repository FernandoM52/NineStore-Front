import {
  Container,
  ProductItemContainer,
  ProductItem,
  ProductImage,
  ProductData,
  ProductName,
  ProductInfo,
  ProductAmount,
  ProductPrice,
  StyledWrapper,
} from "./styled";
import Apochete from "../../assets/imagens/TestandoProdutoNaListaDePedidoFinalizado.png";

export default function PurchasedProducts() {
  return (
    <Container>
      <p>Produtos comprados</p>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apochete} alt="Apochete" />
          </ProductImage>
          <ProductData>
            <ProductName>Apochete</ProductName>
            <ProductInfo>Laranja</ProductInfo>
            <ProductAmount>1</ProductAmount>
            <ProductPrice>R$ 10,00</ProductPrice>
          </ProductData>
        </ProductItem>
        <StyledWrapper />
      </ProductItemContainer>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apochete} alt="Apochete" />
          </ProductImage>
          <ProductData>
            <ProductName>Apochete</ProductName>
            <ProductInfo>Laranja</ProductInfo>
            <ProductAmount>1</ProductAmount>
            <ProductPrice>R$ 10,00</ProductPrice>
          </ProductData>
        </ProductItem>
        <StyledWrapper />
      </ProductItemContainer>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apochete} alt="Apochete" />
          </ProductImage>
          <ProductData>
            <ProductName>Apochete</ProductName>
            <ProductInfo>Laranja</ProductInfo>
            <ProductAmount>1</ProductAmount>
            <ProductPrice>R$ 10,00</ProductPrice>
          </ProductData>
        </ProductItem>
        <StyledWrapper />
      </ProductItemContainer>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apochete} alt="Apochete" />
          </ProductImage>
          <ProductData>
            <ProductName>Apochete</ProductName>
            <ProductInfo>Laranja</ProductInfo>
            <ProductAmount>1</ProductAmount>
            <ProductPrice>R$ 10,00</ProductPrice>
          </ProductData>
        </ProductItem>
        <StyledWrapper />
      </ProductItemContainer>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apochete} alt="Apochete" />
          </ProductImage>
          <ProductData>
            <ProductName>Apochete</ProductName>
            <ProductInfo>Laranja</ProductInfo>
            <ProductAmount>1</ProductAmount>
            <ProductPrice>R$ 10,00</ProductPrice>
          </ProductData>
        </ProductItem>
        <StyledWrapper />
      </ProductItemContainer>
    </Container>
  );
}
