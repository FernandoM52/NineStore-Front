import styled from "styled-components";
import Apachote from "../assets/imagens/TestandoProdutoNaListaDePedidoFinalizado.png";

export default function PurchasedProducts() {
  return (
    <Container>
      <p>Produtos comprados</p>
      <ProductItemContainer>
        <ProductItem>
          <ProductImage>
            <img src={Apachote} alt="Apochete" />
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
            <img src={Apachote} alt="Apochete" />
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
            <img src={Apachote} alt="Apochete" />
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
            <img src={Apachote} alt="Apochete" />
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
            <img src={Apachote} alt="Apochete" />
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

const Container = styled.ul`
width: 35%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
overflow-y: auto;
max-height: 80vh;

  >p{
    width: 64%;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    padding-top: 20px;
  }
`;

const ProductItemContainer = styled.li`
display: flex;
align-items: center;
flex-direction: column;
width: 80%;
`;

const ProductItem = styled.div`
display: flex;
align-items: center;
width: 80%;
`;

const ProductImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  border: solid;
  border-color: rgb(229 231 235);
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  font-size: 20px;
  gap: 6px;
`;

const ProductName = styled.p`
color: rgb(17 24 39);
font-size: 18px;
left: 28px;
`;

const ProductInfo = styled.p`
color: rgb(107 114 128);
font-size: 14px;
line-height: 20px;
`;

const ProductAmount = styled.p`
color: rgb(107 114 128);
font-size: 14px;
line-height: 20px;
`;

const ProductPrice = styled.p`
color: rgb(17 24 39);
font-size: 16px;
line-height: 24px;
`;

const StyledWrapper = styled.div`
background-color: rgb(229 231 235);
width: 80%;
height: 1px;
margin-top: 15px;
`;
