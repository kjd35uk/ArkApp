import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox'
import DinoDisplay from './DinoDisplay/DinoDisplay'
import DinoList from './data/DinoList'


class App extends Component {
  state = {
    dinos:[],
    dino: {
      species: '',
      name: '',
      health: {},
      stamina:{},
      oxygen:{},
      food:{},
      weight:{},
      imageURL: ''
    }
  };
  componentDidMount = async () => {
    const dinos = [...this.state.dinos, ...DinoList]
    this.setState({ dinos })
  }

  render() {
    console.log(this.state.dinos, 'dinos')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Happy birthday, Michael!</h1>
          <SearchBox handleChange={this.handleChange}/>
        </header>
        {DinoList.map(dino => <p>{dino.name}</p>)}
        <DinoDisplay dino={this.state.dino}/>
      </div>
    );
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value
    });
  }
  handleChange = ({target:{value}}) => {
    console.log(value, 'VALUE')
    const newDino = value;
    const filteredDinos = DinoList.filter(({ name }) => {
      return name === newDino;
    });
    console.log(filteredDinos, 'FILTERED')

    this.setState({
      dino: filteredDinos[0]
    });
  };
}

export default App;
