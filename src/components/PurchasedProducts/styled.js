import styled from "styled-components";

export const Container = styled.ul`
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

export const ProductItemContainer = styled.li`
display: flex;
align-items: center;
flex-direction: column;
width: 80%;
`;

export const ProductItem = styled.div`
display: flex;
align-items: center;
width: 80%;
`;

export const ProductImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  border: solid;
  border-color: rgb(229 231 235);
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  font-size: 20px;
  gap: 6px;
`;

export const ProductName = styled.p`
color: rgb(17 24 39);
font-size: 18px;
left: 28px;
`;

export const ProductInfo = styled.p`
color: rgb(107 114 128);
font-size: 14px;
line-height: 20px;
`;

export const ProductAmount = styled.p`
color: rgb(107 114 128);
font-size: 14px;
line-height: 20px;
`;

export const ProductPrice = styled.p`
color: rgb(17 24 39);
font-size: 16px;
line-height: 24px;
`;

export const StyledWrapper = styled.div`
background-color: rgb(229 231 235);
width: 80%;
height: 1px;
margin-top: 15px;
`;
