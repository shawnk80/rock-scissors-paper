import React, { Component } from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import GamePage from './pages/GamePage'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/playgame' component={GamePage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
