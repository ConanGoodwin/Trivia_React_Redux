import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
<<<<<<< HEAD
import Game from './pages/Game';
=======
import Game from './pages/game';
import Settings from './pages/settings';
>>>>>>> 1158917... l => L

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        {/* <p>SUA VEZ</p> */}
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
        </Switch>
      </header>
    </div>
  );
}
