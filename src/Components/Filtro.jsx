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
h3{
  margin-left:4px;
}input{
  margin-left:4px;
  justify-content:center;
}
p{
  margin-left:4px;
  margin-bottom:2px;
}`


class Filtro extends React.Component {
    
  
      
  
  render(){
      return (
        <StyleFiltro>  
        <div>
        <h3>Filtros</h3>
            <p>Valor mínimo:</p>
              <input placeholder='5' type="number"/>
            <p>Valor máximo:</p>
              <input placeholder='1000' type="number"/>
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