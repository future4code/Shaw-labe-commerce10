import React from 'react';
import styled from 'styled-components'

const StyleFiltro = styled.div`
display:flex;
border:1px solid;
padding:10px;
background-color:#101626;
border-radius:20px;
gap: 10vw;
label{
  margin-left:4px;
  color: white;
  font-weight: bold;
}input{
  margin-left:4px;
  justify-content:center;
  width: 100px;
}
p{
  margin-left:4px;
  margin-bottom:2px;
  color: white;
  font-weight: bold;
}`

const Busca = styled.div`
  input {
    width: 200px;
  }
`

class Filtro extends React.Component {
    
  
      
  
  render(){
      return (
        <StyleFiltro>

          <div>
            <label>Filtrar por:</label>
            {/* <p>Valor mínimo:</p> */}
              <input 
               placeholder='Preço mínimo'
               type="number"
               value={this.props.minPrice}
               onChange={this.props.updateMinPrice}
               />
            {/* <p>Valor máximo:</p> */}
              <input 
               placeholder='Preço máximo'
               type="number"
               value={this.props.maxPrice}
               onChange={this.props.updateMaxPrice}
               />
          </div>
          <Busca>
            <label>Busca:</label>
              <input placeholder='Pesquisa'
                     value={this.props.query}
                     onChange={this.props.updateQuery}
              />
          </Busca>
             
        </StyleFiltro>
      )
    }
   
  }
  
  export default Filtro;