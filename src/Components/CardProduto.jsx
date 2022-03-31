import React from "react";
import styled from "styled-components";

const Card = styled.div`
background-color: white;
  /* border: 1px solid gray; */
  width: 200px;
  margin-bottom: 10px;
  padding: 10px;
`;

class CardProduto extends React.Component {
  render() {
    return (
      <Card>
        <img src={this.props.imagemProduto} alt={"Imagem do produto"} />
        <h4>{this.props.nomeProduto}</h4>
        <p>{this.props.valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <button>Adicionar Carrinho</button>
      </Card>
    );
  }
}

export default CardProduto;
