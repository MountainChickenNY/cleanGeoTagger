import React, { Component } from 'react';
import Tagger from './Tagger';
import Navbar from './Navbar';


class App extends Component {
  render(){
    return (
      <div> 
        <Navbar />
        <div class="jumbotron">
          <h1>Mountain Chickens Rule!</h1>
          <Tagger />
        </div>
      </div>
    );
  }
}

export default App;
