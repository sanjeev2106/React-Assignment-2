import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput:''
  };

  changeUserInputHandler = (event) =>{
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput:updatedText});
  }

  render(){

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index} 
      clicked={() => this.deleteCharHandler(index)}/>
    } )      
  

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <input type='text' 
        onChange={this.changeUserInputHandler}
        value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLen = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }  
}

export default App;
