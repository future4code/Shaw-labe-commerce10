import React from 'react'
import styled from 'styled-components'


const ContainerCarrinho = styled.div`
display: flex;
border: 1px solid black;
height: 300px;
width: 150px;
margin: 10px;
text-align:center;
h3{
  margin: 5px;
}
`



class Carrinho extends React.Component {
    render(){
      return (
        <ContainerCarrinho>
            <div>
          <h3> Carrinho: </h3>
          <p> Valor total </p>
          </div>
          </ContainerCarrinho>
      )
    }
   
  }

  export default Carrinho;