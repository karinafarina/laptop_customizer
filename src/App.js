import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Main features={this.props.features}/>
      </div>
    );
  }
}

export default App;  
