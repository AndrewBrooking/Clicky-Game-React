import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/index';
import Wrapper from './components/Wrapper/index';

class App extends React.Component {

  state = {
    score: 0,
    highScore: 0
  };

  increaseScore() {
    let score = this.state.score + 1;
    let highScore = this.state.highScore;

    if (score > highScore) {
      highScore = score;
    }

    this.setState({
      score,
      highScore
    });
  }

  reset() {
    this.setState({
      score: 0,
      highScore: this.state.highScore
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <Wrapper />
      </div>
    );
  }
}

export default App;
