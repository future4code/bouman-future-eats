import React from 'react';
import styled from 'styled-components'
import ImgDish from '../../img/dishImg.png'

const MainContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display:flex;
  position: relative;
  `

const TextContainer = styled.div`
  margin-left: 16px;
  margin-top: 18px;
`

const DishMainName = styled.p `
  width: 167px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin: 0px;
`

const DishDescription = styled.p `
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin: 0px;
  margin-top: 8px;
`
const Price = styled.p `
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0px;
  margin-top: 4px;
`

const ButtonAdd = styled.button `
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #5cb646;
  background: white;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;

`

const ButtonRemove = styled.button `
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e02020;
  background: white;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  p {
    color: #e02020
  }

`

const TextButton = styled.p `
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #5cb646;
  margin: 0px;
  
`


export default function DishCard() {
  return (
    <MainContainer>
      <img src={ImgDish} alt="PratoDoRestaurante"/>
      <TextContainer>
        <DishMainName>Stencil</DishMainName>
        <DishDescription>Pão, carne, queijo, cebola roxa, tomate, alface e molho</DishDescription>
        <Price>R$ 67,70</Price>
        <ButtonAdd>
          <TextButton>Adicionar</TextButton>
        </ButtonAdd>
      </TextContainer>
    </MainContainer>
  );
}
