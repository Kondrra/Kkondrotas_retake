import React, { Component } from 'react';
import FormaContainer from './FormaContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FormaContainer history={this.props.history}/>
      </div>
    );
  }
}

export default App;
