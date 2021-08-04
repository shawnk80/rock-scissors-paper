import React, { Component } from 'react';

class GamePage extends Component {
  
  state = {
    userGuess: ''
  }

  determineWinner = () => {

  }


  genCompGuess = () => {
    const outcomes = ['Rock', 'Paper', 'Scissors']
    return outcomes[Math.floor(Math.random() * outcomes.length)]
  }

  determineWinner = (computerGuess) => {
    let userGuess = this.state.userGuess
    if (userGuess === computerGuess)
      return 'Tie'
    else if ((userGuess === 'Rock' && computerGuess === "Scissors" )
      || (userGuess === 'Paper' && computerGuess === 'Rock')
      || (userGuess === 'Scissors' && computerGuess === 'Papaer'))
      return 'User'
    else
      return 'Computer'
    
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      userGuess: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.userGuess === '')
      return
    
    let computerGuess = this.genCompGuess()
    let winner = this.determineWinner(computerGuess)
    console.log(`Your guess: ${this.state.userGuess}, Computer: ${computerGuess}, Winner: ${winner}`)
  }

  render() {
    return (
      <div>
        <h1> Let's Play a Game </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select your choice:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Rock">Rock</option>
              <option value="Paper">Paper</option>
              <option value="Scissors">Scissors</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default GamePage;