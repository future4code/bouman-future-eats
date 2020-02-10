import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 102px;
border-radius: 8px;
border: solid 1px #b8b8b8;
padding: 16px;
p {
  margin: 0;
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin-bottom: 8px;
}
`

//protótipo de renderização condicional caso não haja nenhum pedido no histórico do cliente
let pastOrders

if (pastOrders === undefined || pastOrders === null) {
  return (
    <p>Você não realizou nenhum pedido</p>
  )
}

//

function OrderHistory (props){
  return(
    <MainContainer>
      <p>Bullguer Vila Madalena</p>

      <p style={{color: "black", fontSize: "12px"}}>
        23 outubro 2019
      </p>

      <p style={{color: "black", fontWeight: "bold"}}>
        SUBTOTAL R$67,00
      </p>
    </MainContainer>
  )
}

export default OrderHistory