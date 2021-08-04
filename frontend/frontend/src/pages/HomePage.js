import React, { Component } from 'react'
import fetchGames from '../api/rockPaperScissorsAPI'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  state = {
    won: 0,
    lost: 0,
    tie: 0
  }

  get_games = async () => {
    let data = await fetchGames();
    this.setState({
      won: data.filter(game => game.gameWon === 'W').length,
      lost: data.filter(game => game.gameWon === 'L').length,
      tie: data.filter(game => game.gameWon === 'T').length,
    })
  
  }

  componentDidMount = async () => {
    this.get_games()
  }
  
  
  render() {
    return (
      <div>
        <h1> Let's Play Rock, Paper, Scissors! </h1>
        <h3> Wins: {this.state.won} </h3>
        <h3> Losses: {this.state.lost} </h3>
        <h3> Ties: {this.state.tie} </h3>
        <Link to={"/playgame"}>
          <button type="button" class="btn">
            Play a Game
          </button>
        </Link>
      </div>
    )
  }
}

export default HomePage
