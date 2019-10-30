import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/index';
import Game from './components/Game/index';
import Characters from './images.json';

class App extends React.Component {

  state = {
    score: 0,
    highScore: 0,
    characters: Characters,
    clicked: []
  };

  increaseScore = () => {
    let score = this.state.score + 1;
    let highScore = this.state.highScore;

    if (score > highScore) {
      highScore = score;
    }

    console.log(score, highScore);

    return {score, highScore};
  }

  randomizeCharacters = () => {
    let array = [...this.state.characters]
    let index = this.state.characters.length;
    let temp, randIndex;

    while (index !== 0) {
      randIndex = Math.floor(Math.random() * index);
      index--;

      temp = array[index];
      array[index] = array[randIndex];
      array[randIndex] = temp;
    }

    return array;
  }

  charClicked = (id) => {
    if (this.state.clicked.includes(id)) {
      this.reset();
    } else {
      const clicked = [...this.state.clicked];
      clicked.push(id);
      
      const {score, highScore} = this.increaseScore();
      const characters = this.randomizeCharacters();
      
      this.setState({
        score,
        highScore,
        characters,
        clicked
      });
    }
  }

  reset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      characters: Characters,
      clicked: []
    });
  }

  render = () => {
    return (
      <div className="container-fluid">
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <Game characters={this.state.characters} charClicked={this.charClicked} />
      </div>
    );
  }
}

export default App;
