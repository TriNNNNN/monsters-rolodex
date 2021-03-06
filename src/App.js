import React, { Component } from 'react';
import './App.css';


class App extends Component { 

  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => {
      return response.json()
    })
    .then( monsters => {
      this.setState( { monsters: monsters} )
    })
  }

  render() {
     return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key= { monster.id }> { monster.name } </h1> 
          ))}
      </div>
    );
  }
}

export default App;
