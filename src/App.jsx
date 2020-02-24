import React from 'react';

class App extends React.Component {
  state = {
    gameBoard: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    player: 1
  };

  render() {
    return (
      <>
        <h1>Player: {this.state.player}</h1>

        <div class="grid">
          <button type="button" onClick={this.handleClick(0, 0)}>
            {this.state.gameBoard[0][0]}
          </button>
          <button type="button" onClick={this.handleClick(0, 1)}>
            {this.state.gameBoard[0][1]}
          </button>
          <button type="button" onClick={this.handleClick(0, 2)}>
            {this.state.gameBoard[0][2]}
          </button>
          <button type="button" onClick={this.handleClick(1, 0)}>
            {this.state.gameBoard[1][0]}
          </button>
          <button type="button" onClick={this.handleClick(1, 1)}>
            {this.state.gameBoard[1][1]}
          </button>
          <button type="button" onClick={this.handleClick(1, 2)}>
            {this.state.gameBoard[1][2]}
          </button>
          <button type="button" onClick={this.handleClick(2, 0)}>
            {this.state.gameBoard[2][0]}
          </button>
          <button type="button" onClick={this.handleClick(2, 1)}>
            {this.state.gameBoard[2][1]}
          </button>
          <button type="button" onClick={this.handleClick(2, 2)}>
            {this.state.gameBoard[2][2]}
          </button>
        </div>
      </>
    );
  }
}

export default App;
