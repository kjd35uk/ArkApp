import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import Dinos from "./Dinos";
import SingleDino from "./SingleDino";
import DinoList from "./data/DinoList";


class App extends Component {
  state = {
    DinoList,
    dino: {
      name: "",
      health: { L1: 0, W: 0, T: 0 },
      stamina: { L1: 0, W: 0, T: 0 },
      oxygen: { L1: 0, W: 0, T: 0 },
      food: { L1: 0, W: 0, T: 0 },
      weight: { L1: 0, W: 0, T: 0 },
    }
  };

  render() {
    console.log(this.state.dino, "dino");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome home, Michael!</h1>
          <SearchBox
            handleChange={this.handleChange}
            dinos={this.state.DinoList}
          />
        </header>
        {this.state.dino.name ? <SingleDino dino={this.state.dino}/> :  <Dinos dinos={this.state.DinoList} />}
      </div>
    );
  }
 
  handleChange = ({ target: { value } }) => {
    const newDino = value;
    const filteredDinos = DinoList.filter(({ name }) => {
      return name === newDino;
    });
    this.setState({
      dino: filteredDinos[0]
    });
  };
}

export default App;
