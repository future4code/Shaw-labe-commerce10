import React from 'react'
import styled from 'styled-components'


const ProdutoCarrinho = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 90%;

button{
    background-color: #3F3CA6;
    color: white;
    font-weight: bolder;
    font-size: 1em;
    border-radius: 10px;
}
button:hover{
    background: rgba(0,0,0,0);
    color:#3F3CA6    
}
`

const Descricao = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 5px;
    flex-grow: 1;
`

const Quantidade = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 5px;
    width: 30px;
`

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
flex-wrap: wrap;
height: 80vh;
width: 400px;
background-color:#101626;
color: white;   
border-radius:20px;


h3{
    margin:0;
  padding: 10px;
  font-weight:bold;
  width: 60%;
}

@media screen and (min-device-width : 320px) and (max-device-width : 600px) {
    width: 100%;
  }

`

const ValorTotal= styled.p`
display: flex;
margin:0;
box-sizing: border-box;
font-weight: bolder; 
font-size: 20px;
padding: 10px;
`

class Carrinho extends React.Component {
    render() {
        let valortotal = 0
        const carrinhoFiltrado = this.props.carrinho.filter((ele, pos) => { return this.props.carrinho.indexOf(ele) === pos; });

        for (let produtos of carrinhoFiltrado) {
            valortotal += produtos.valorProduto * produtos.quantidade

        }
        const RenderCarrinho = carrinhoFiltrado.map((produto) => {
            return (
                <ProdutoCarrinho>
                    <Quantidade>{produto.quantidade}x</Quantidade>
                    <Descricao>{produto.nomeProduto}</Descricao>
                    <button onClick={() => this.props.removeCarrinho(produto.id)}>Remover</button>

                </ProdutoCarrinho>

            )
        })
        return (
            <ContainerCarrinho>
                <h3> Carrinho: </h3>
                <div>
                    {RenderCarrinho}
                </div>
                <ValorTotal> Valor total: {valortotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorTotal>

            </ContainerCarrinho>
        )
    }

}

export default Carrinho;