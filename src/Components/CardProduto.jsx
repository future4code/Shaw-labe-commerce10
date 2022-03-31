import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid gray;
  width: 200px;
  margin-bottom: 10px;
`;

class CardProduto extends React.Component {
  render() {
    return (
      <Card>
        <img src="" alt="" />
        <p>Produto</p>
        <p>Preço</p>
        <button>Adicionar Carrinho</button>
      </Card>
    );
  }
}

export default CardProduto;
