import React from "react";
import styled from "styled-components";

const ContainerOrdenacao = styled.span`
  /* background-color: azure; */
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

class Ordenacao extends React.Component {
  render() {
    return (
      <ContainerOrdenacao>
        <label for="Categoria">Ordenação:</label>

        <select
          name="Categoria"
          value={this.props.categoria}
          onChange={this.props.atualizaCategoria}
        >
          <option value="Nome do Produto">Nome do Produto</option>
          <option value="Preço">Preço</option>
        </select>

        <select
          name="Ordem"
          value={this.props.ordem}
          onChange={this.props.atualizaOrdem}
        >
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>
      </ContainerOrdenacao>
    );
  }
}

export default Ordenacao