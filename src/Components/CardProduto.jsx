import React from "react";
import styled from "styled-components";

const Card = styled.div`

background-color: #FCE9D4;  
  width: 200px;
  height: 350px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 50%;
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

const TextoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 40%;
  justify-content: space-around;

  h4 {
    height: 50px;
    margin: 0;
    padding: 0;
  }

  h2{
    color: #3F3CA6;
    margin: 0;
    padding: 0;
  }

`

class CardProduto extends React.Component {
  render() {
    return (
      <Card>
          <img src={this.props.imagemProduto} alt={"Imagem do produto"} />
        <TextoCard>
          <h4>{this.props.nomeProduto}</h4>        
          <h2>{this.props.valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        </TextoCard>
        <button onClick={() => this.props.addCarrinho(this.props.id)}>
          Adicionar Carrinho
        </button>
      </Card>

    );
  }
}

export default CardProduto;
