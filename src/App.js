import React, { Component } from 'react';
import './App.css';

import Dicent from './components/Dicent';

class App extends Component {
  componentDidMount(){
    document.title = "Dicent"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dicent/>
        </header>
      </div>
    );
  }
}

export default App;
