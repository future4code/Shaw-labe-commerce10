import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const ContainerProdutos = styled.div`
  /* background-color: aqua; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 10px;
`;

const ContainerTop = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const ContainerOrdenacao = styled.div`
  background-color: azure;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ContainerCard = styled.div`
  background-color: bisque;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

class Produtos extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        <ContainerTop>
          <p>Quantidade de produtos:</p>
          <ContainerOrdenacao>
            <p>Ordenação:</p>
            <select>
              <option value="Decrescente">Decrescente</option>
              <option value="Crescente">Crescente</option>
            </select>
          </ContainerOrdenacao>
        </ContainerTop>

        <ContainerCard>
          <CardProduto />
          <CardProduto />
        </ContainerCard>
      </ContainerProdutos>
    );
  }
}

export default Produtos;
