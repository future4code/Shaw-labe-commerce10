import React from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto";
import Filtro from './Components/Filtro';
import Carrinho from './Components/Carrinho'
import Ordenacao from "./Components/Ordenacao";

const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
`

const Header = styled.div`
  display: flex;
  background-color: #2D3073;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 70px;
`

const CadastroLogin = styled.div`
  display: flex;
  gap: 50px;

  a {
    text-decoration: none;
    color: white;
    font-size: 1.5em;
  }
`

const StyleFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width: 100%;
`

const ContainerProdutos = styled.div`
  background-color: #101626;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* margin-top: 10px; */
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
        nomeProduto: " Produto 1",
        valorProduto: 100.0,
        imagemProduto: "https://picsum.photos/200/200",
        quantidade: 0
      },
      {
        id: 2,
        nomeProduto: "Produto 2",
        valorProduto: 300.0,
        imagemProduto: "https://picsum.photos/200/200",
        quantidade: 0
      },
      {
        id: 3,
        nomeProduto: "Produto 3",
        valorProduto: 200.0,
        imagemProduto: "https://picsum.photos/200/200",
        quantidade: 0
      },
      {
        id: 4,
        nomeProduto: "Produto 4",
        valorProduto: 350.05,
        imagemProduto: "https://picsum.photos/200/200",
        quantidade: 0
      }
    ],
    categoria: "Nome do Produto",
    ordem: 1,
    carrinho: [],
    query:"",
    minPrice:"",
    maxPrice:""

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
 

  addCarrinho = (id) => {
    const novoCarrinho = [...this.state.carrinho]
    const novoProduto = [...this.state.produtos]
    const indiceProduto = this.state.produtos.findIndex((produto) => {
      return produto.id === id
    })
    novoCarrinho.push(this.state.produtos[indiceProduto])

    novoProduto[indiceProduto].quantidade += 1
    this.setState({ carrinho: novoCarrinho, produtos: novoProduto })

  }

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value
  })

}
updateMinPrice = (ev)=>{
  this.setState({
    minPrice:ev.target.value
  })
}
updateMaxPrice = (ev)=>{
  this.setState({
    maxPrice:ev.target.value
  })
}

  // addcarrinho vai para CardProduto como PROPS ~~~~~~ ^^

  removeCarrinho = (id) => {
    const novoCarrinho = [...this.state.carrinho]
    const novoProduto = [...this.state.produtos]
    const indiceProduto = this.state.produtos.findIndex((produto) => {
      return produto.id === id
    })
    const indiceCarrinho = this.state.carrinho.findIndex((produto) => {
      return produto.id === id
    })
    novoCarrinho.splice(indiceCarrinho, 1)
    novoProduto[indiceProduto].quantidade -= 1
    this.setState({ carrinho: novoCarrinho, produtos: novoProduto })


  }
  // removeCarrinho vai para carrinho COMO PROPS~~~~~~^^^
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

      .filter(produto =>{
        return produto.nomeProduto.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase()) 
      })
      .filter (produto=>{
        return this.state.minPrice === "" || produto.valorProduto >= this.state.minPrice
      })
      .filter (produto=>{
        return this.state.maxPrice === "" || produto.valorProduto <= this.state.maxPrice

      })

      .map((produto) => {
        return (
          <CardProduto
            id={produto.id}
            nomeProduto={produto.nomeProduto}
            valorProduto={produto.valorProduto}
            imagemProduto={produto.imagemProduto}
            addCarrinho={this.addCarrinho}
          />
        )
      })



    return (

      <ContainerPai>

        <Header>
          <div>Nome da loja</div>
          <CadastroLogin>
            <a href="">Cadastre-se</a>
            <a href="">Login</a>
          </CadastroLogin>
        </Header>

        <StyleFlex>
          {console.log(this.state.query)}
          <Filtro
          updateQuery={this.updateQuery}
          query={this.state.query}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}
          />

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

          <Carrinho carrinho={this.state.carrinho} removeCarrinho={this.removeCarrinho} />


        </StyleFlex>

      </ContainerPai>

    );
  }
}

export default App;
