import React from 'react';
import Confetti from 'react-confetti';

class App extends React.Component {
  state = {
    gameBoard: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    player: 'x'
  };

  didSomeoneWin = (gameBoard, currentPlayer) => {
    for (let y = 0; y < 3; y++) {
      if (gameBoard[y][0] === currentPlayer
        && gameBoard[y][1] === currentPlayer
        && gameBoard[y][2] === currentPlayer) {
        return true;
      }
    }
    for (let x = 0; x < 3; x++) {
      if (gameBoard[0][x] === currentPlayer
        && gameBoard[1][x] === currentPlayer
        && gameBoard[2][x] === currentPlayer) {
        return true;
      }
    }
    if (gameBoard[0][0] === currentPlayer
      && gameBoard[1][1] === currentPlayer
      && gameBoard[2][2] === currentPlayer) {
      return true;
    }
    if (gameBoard[0][2] === currentPlayer
      && gameBoard[1][1] === currentPlayer
      && gameBoard[2][0] === currentPlayer) {
      return true;
    }
    return false;
  }

  handleClick = (y, x) => {
    const gameBoard = [...this.state.gameBoard];
    if (gameBoard[y][x] === '') {
      gameBoard[y][x] = this.state.player;

      const someoneWon = this.didSomeoneWin(gameBoard, this.state.player);
      
      const player = this.state.player === 'x' ? 'o' : 'x';

      this.setState({
        gameBoard,
        player,
        someoneWon
      });

      // if (someoneWon) {
      //   alert(`${this.state.player} Won!!!`);
      //   this.setState({
      //     gameBoard: [
      //       ['', '', ''],
      //       ['', '', ''],
      //       ['', '', '']
      //     ],
      //     player: 'x'
      //   });
      // }
    }
  }

  render() {
    return (
      <>
        {this.state.someoneWon && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        
        <h1>Player: {this.state.player}</h1>

        <div className="grid">
          <button type="button" onClick={() => {this.handleClick(0, 0);}}>
            {this.state.gameBoard[0][0]}
          </button>
          <button type="button" onClick={() => {this.handleClick(0, 1);}}>
            {this.state.gameBoard[0][1]}
          </button>
          <button type="button" onClick={() => {this.handleClick(0, 2);}}>
            {this.state.gameBoard[0][2]}
          </button>
          <button type="button" onClick={() => {this.handleClick(1, 0);}}>
            {this.state.gameBoard[1][0]}
          </button>
          <button type="button" onClick={() => {this.handleClick(1, 1);}}>
            {this.state.gameBoard[1][1]}
          </button>
          <button type="button" onClick={() => {this.handleClick(1, 2);}}>
            {this.state.gameBoard[1][2]}
          </button>
          <button type="button" onClick={() => {this.handleClick(2, 0);}}>
            {this.state.gameBoard[2][0]}
          </button>
          <button type="button" onClick={() => {this.handleClick(2, 1);}}>
            {this.state.gameBoard[2][1]}
          </button>
          <button type="button" onClick={() => {this.handleClick(2, 2);}}>
            {this.state.gameBoard[2][2]}
          </button>
        </div>
      </>
    );
  }
}

export default App;
