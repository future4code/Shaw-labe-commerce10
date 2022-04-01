import React from "react";
import styled from "styled-components";

const Card = styled.div`
background-color: #FCE9D4;  
  width: 200px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;

  h2{
    color: #3F3CA6;
  }

  button {
    background-color: #3F3CA6;
    color: white;
    font-weight: bolder;
    font-size: 1em;
    border-radius: 10px;
    width: 100%;
    height: 30px;

  }
`

class CardProduto extends React.Component {
  render() {
    return (
      <Card>
        <img src={this.props.imagemProduto} alt={"Imagem do produto"} />
        <h4>{this.props.nomeProduto}</h4>        
        <h2>{this.props.valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        <button onClick={() => this.props.addCarrinho(this.props.id)}>Adicionar Carrinho</button>
      </Card>

    );
  }
}

export default CardProduto;
