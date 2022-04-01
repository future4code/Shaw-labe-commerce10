import React from 'react'
import styled from 'styled-components'


const ProdutoCarrinho = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

button{
    background-color: #3F3CA6;
    color: white;
    font-weight: bolder;
    font-size: 1em;
    border-radius: 10px;
  
}

`

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
flex-wrap: wrap;
border: 1px solid black;
height: 80vh;
width: 20vw;
margin: 10px;


h3{
  margin: 5px;
}

p{
  display: flex;
  margin: 5px;;
}

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
                    <p>{produto.quantidade}x</p>
                    <p>{produto.nomeProduto}</p>
                    <button onClick={() => this.props.removeCarrinho(produto.id)}>Remover</button>

                </ProdutoCarrinho>

            )
        })
        return (
            <ContainerCarrinho>
                <h3> Carrinho: </h3>
                <>
                    {RenderCarrinho}
                </>
                <p> Valor total: R${valortotal.toFixed(2)}</p>

            </ContainerCarrinho>
        )
    }

}

export default Carrinho;