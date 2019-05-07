import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Servicos from './Servicos'
import Portfolio from './Portfolio'
import Precos from './Precos'
import Contatos from './Contatos'
import Rodape from './Rodape'
import AdminPortfolio from './AdminPortfolio'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="App">
          <Home />
          <Route path="/sobre" exact component={Sobre} />
          {/* <Route path="/sobre" component={Sobre} /> */}
          <Route path="/servicos" component={Servicos} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/precos" component={Precos} />
          <Route path="/contatos" component={Contatos} />
          <Route path="/adminportfolio" component={AdminPortfolio} />
          <Rodape />
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
