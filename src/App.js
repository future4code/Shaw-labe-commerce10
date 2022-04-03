import React from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto";
import Filtro from './Components/Filtro';
import Carrinho from './Components/Carrinho'
import Ordenacao from "./Components/Ordenacao";

const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-image:url(https://i.pinimg.com/originals/ce/10/f9/ce10f973c7527d1661c99ca05e10e503.jpg);
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  background-color: #2D3073;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 10vh;

  div {
    padding: 0 10px;
    font-size: 1.5em;
  }
`

const CadastroLogin = styled.div`
  display: flex;
  gap: 30px;
  

  a {
    text-decoration: none;
    color: white;
    font-size: 1em;
    
  }
`

const StyleFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width: 100%;
  min-width: 40%;
  gap: 20px;

  @media screen and (min-device-width : 320px) and (max-device-width : 600px) {
    display:flex;
    flex-direction:column;
  }
`

const ContainerProdutos = styled.div`
  background-color: #101626;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  border-radius:20px;
  min-height: 100vh;
`;

const ContainerTop = styled.div`
  background-color: bisque;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  font-size: 1em;
  border-radius:10px; 

  p {
    margin: 0;
  }
`;

const ContainerCard = styled.div` 
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
        nomeProduto: "Voo de gravidade 0",
        valorProduto: 1000.0,
        imagemProduto: "https://media.gazetadopovo.com.br/viver-bem/2016/02/vol_apesanteur_32_light-600x376-d6afd220.jpg",
        quantidade: 0
      },
      {
        id: 2,
        nomeProduto: "Hotel no lado oculto na Lua",
        valorProduto: 30000.0,
        imagemProduto: "https://casa.abril.com.br/wp-content/uploads/2016/11/moon2.jpeg?quality=70&strip=all",
        quantidade: 0
      },
      {
        id: 3,
        nomeProduto: "Estadia na Estação Espacial Internacional",
        valorProduto: 10500.0,
        imagemProduto: "https://s2.glbimg.com/t-zXbe2S1LFVSQbpvkEXeLWQ-rc=/e.glbimg.com/og/ed/f/original/2020/01/03/iss_1.jpg",
        quantidade: 0
      },
      {
        id: 4,
        nomeProduto: "Hotel na Lua com vista pra Terra",
        valorProduto: 50000.00,
        imagemProduto: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2013/12/26/as8-14-2383hrearthrise.jpg",
        quantidade: 0
      },
      {
        id: 5,
        nomeProduto: "Passeio em Marte + tanque de oxigênio grátis",
        valorProduto: 300000.00,
        imagemProduto: "https://img.r7.com/images/marte-astronautas-israel-11102021122951495?dimensions=771x420&no_crop=true",
        quantidade: 0
      },
      {
        id: 6,
        nomeProduto: "Hotel na órbita de Marte",
        valorProduto: 240000.00,
        imagemProduto: "https://uploads.metropoles.com/wp-content/uploads/2020/09/11170318/Marte-retro%CC%81grado-768x512-1-600x400.jpg",
        quantidade: 0
      },
      {
        id: 7,
        nomeProduto: "Passeio pelos anéis de Saturno",
        valorProduto: 600000.00,
        imagemProduto: "https://nossaciencia.com.br/wp-content/uploads/2018/05/aneissaturno.jpg",
        quantidade: 0
      },
      {
        id: 8,
        nomeProduto: "Passagem + Hotel na órbita de Jupiter",
        valorProduto: 530000.00,
        imagemProduto: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        quantidade: 0
      }
    ],
    categoria: "Nome do Produto",
    ordem: 1,
    carrinho: [],
    query: "",
    minPrice: "",
    maxPrice: ""

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
  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value
    })
  }
  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value
    })
  }

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

      .filter(produto => {
        return produto.nomeProduto.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
      })
      .filter(produto => {
        return this.state.minPrice === "" || produto.valorProduto >= this.state.minPrice
      })
      .filter(produto => {
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
          <div>SpaceLab</div>
          <CadastroLogin>
            <a href="">Cadastre-se</a>
            <a href="">Login</a>
          </CadastroLogin>
        </Header>

        <StyleFlex>


          <ContainerProdutos>

            <Filtro
              updateQuery={this.updateQuery}
              query={this.state.query}
              minPrice={this.state.minPrice}
              updateMinPrice={this.updateMinPrice}
              maxPrice={this.state.maxPrice}
              updateMaxPrice={this.updateMaxPrice}
            />

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
