import React, { Component } from "react";
import "./App.css";
import wands from "./wands";
import List from "./List";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wand Shop</h1>
        </header>
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="content col-10">
              <List wands={wands} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
