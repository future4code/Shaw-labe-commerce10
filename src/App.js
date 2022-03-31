import React from 'react';
import styled from 'styled-components'
import Filtro from './Components/Filtro';
import Produtos from './Components/Produtos';
import Carrinho from './Components/Carrinho'

const StyleFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width: 100vw;
`

class App extends React.Component {

  state = {
    listaDePosts:[

    ]
  }

  render() {
    return (
      <div>
        <StyleFlex>
          <Filtro />
          <Produtos />
          <Carrinho />
        </StyleFlex>
      </div>
    )
  }

}

export default App;
