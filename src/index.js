import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  handleButtonClick() {
    this.setState({
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      if(this.state.xIsNext) {
        status = 'Winner: Player 2';
      }
      else {
        status = 'Winner: Player 1';
      }
    } 
    else {
      if(this.state.xIsNext) {
        status = 'Current player: Player 1';
      }
      else {
        status = 'Current player: Player 2';
      }
    }
    const finish = 'Finish turn and go to next player';

    return ( 
    <div>
      <div className="status">
        {status}
      </div>
      <br></br>
      <div className = "board-row" > 
        { this.renderSquare(0) } 
      </div> 
      <div className = "board-row" > 
        { this.renderSquare(1) }
        { this.renderSquare(2) } 
        { this.renderSquare(3) } 
      </div> 
      <div className = "board-row" > 
        { this.renderSquare(4) } 
        { this.renderSquare(5) } 
        { this.renderSquare(6) }
        { this.renderSquare(7) } 
        { this.renderSquare(8) } 
      </div> 
      <br></br>
      <div className = "finish" > {
        <button onClick={() => this.handleButtonClick()}>{finish}</button>
      }
      </div>
    </div>
    );
  }
}

class gameInformation extends React.Component {
  render() {
    const desc = "Nim is a game where two players take turns removing objects from the board. Each player must remove at least one object from the board when it is their turn. The loser is the one who removes the last object from the board."
    return (
      <div className = "desc">
        {desc}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    const desc = `Take turns removing objects from the board.
    Each player must remove at least one object from the board when it is their turn. 
    The loser is the one who removes the last object from the board.`
    return ( 
      <div className = "game" >
        <a className = "titleheader"> Game of Nim </a>
        <div className = "desc" >
          {desc}
        </div>  
        <div className = "game-board" >
          <Board />
        </div> 
      </div>
    );
  }
}

ReactDOM.render( <React.StrictMode >
  <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const allSticksPickedUp = [[0, 1, 2, 3, 4, 5, 6, 7, 8]];

  for (let i = 0; i < allSticksPickedUp.length; i++) {
    const [a, b, c, d, e, f, g, h, k] = allSticksPickedUp[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] 
      && squares[a] === squares[d] && squares[a] === squares[e] 
      && squares[a] === squares[f] && squares[a] === squares[g]
      && squares[a] === squares[h] && squares[a] === squares[k] ) 
      {
      return squares[a];
    }
  }
  return null;
}
