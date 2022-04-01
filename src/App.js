import React from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto";
import Filtro from './Components/Filtro';
import Carrinho from './Components/Carrinho'
import Ordenacao from "./Components/Ordenacao";

const StyleFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width: 100vw;
`

const ContainerProdutos = styled.div`
  background-color: #101626;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 10px;
`;

const ContainerTop = styled.div`
  background-color: bisque;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  font-size: 1em;
  /* flex-wrap: wrap; */
`;

const ContainerCard = styled.div`
  /* background-color: bisque; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nomeProduto: "Produto 1",
        valorProduto: 100.0,
        imagemProduto: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        nomeProduto: "Produto 2",
        valorProduto: 300.0,
        imagemProduto: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        nomeProduto: "Produto 3",
        valorProduto: 200.0,
        imagemProduto: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        nomeProduto: "Produto 4",
        valorProduto: 350.05,
        imagemProduto: "https://picsum.photos/200/200",
      }
    ],
    categoria: "Nome do Produto",
    ordem: 1
  }

  atualizaCategoria = (event) => {
    this.setState({
      categoria: event.target.value
    })
  }

  atualizaOrdem = (event) => {
    this.setState({
      ordem: event.target.value
    })
  }

  render() {

    const listaDeProdutos = this.state.produtos
      .sort((a, b) => {
        switch (this.state.categoria) {
          case "Nome do Produto":
            return this.state.ordem * a.nomeProduto.localeCompare(b.nomeProduto)
          default:
            return this.state.ordem * (a.valorProduto - b.valorProduto)
        }
      })
      .map((produto) => {
        return (
          <CardProduto
            id={produto.id}
            nomeProduto={produto.nomeProduto}
            valorProduto={produto.valorProduto}
            imagemProduto={produto.imagemProduto}
          />
        )
      })



    return (

      <div>
        <StyleFlex>

          <Filtro> </Filtro>

          <ContainerProdutos>

            <ContainerTop>

              <p>{listaDeProdutos.length} produtos</p>

              <Ordenacao
                categoria={this.state.categoria}
                atualizaCategoria={this.atualizaCategoria}
                ordem={this.state.ordem}
                atualizaOrdem={this.atualizaOrdem}
              />

            </ContainerTop>

            <ContainerCard> {listaDeProdutos} </ContainerCard>

          </ContainerProdutos>

          <Carrinho />

        </StyleFlex>
      </div>


    );
  }
}

export default App;
