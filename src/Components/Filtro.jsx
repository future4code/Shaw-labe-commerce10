import React from 'react';
import styled from 'styled-components'
import App from '../App';

const StyleFiltro = styled.div`
display:flex;
flex-direction:column;
border:1px solid;
height:380px;
width:230px;
margin:10px;
background-color:#101626;
border-radius:20px;
h3{
  margin-left:4px;
  color: white;
  font-weight: bold;
}input{
  margin-left:4px;
  justify-content:center;
}
p{
  margin-left:4px;
  margin-bottom:2px;
  color: white;
  font-weight: bold;
}`


class Filtro extends React.Component {
    
  
      
  
  render(){
      return (
        <StyleFiltro>  
        <div>
        <h3>Filtros</h3>
            <p>Valor mínimo:</p>
              <input 
               placeholder='Preço mínimo'
               type="number"
               value={this.props.minPrice}
               onChange={this.props.updateMinPrice}
               />
            <p>Valor máximo:</p>
              <input 
               placeholder='Preço máximo'
               type="number"
               value={this.props.maxPrice}
               onChange={this.props.updateMaxPrice}
               />
            <p>Busca por nome:</p>
              <input placeholder='Pesquisa'
                     value={this.props.query}
                     onChange={this.props.updateQuery}
              />
             
        </div>
        </StyleFiltro>
      )
    }
   
  }
  
  export default Filtro;