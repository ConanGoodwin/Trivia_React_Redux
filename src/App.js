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
<<<<<<< HEAD
>>>>>>> 1158917... l => L
=======
import FeedBack from './pages/FeedBack';
>>>>>>> e214ae3... Requisito 13

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        {/* <p>SUA VEZ</p> */}
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
<<<<<<< HEAD
=======
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/feedback" component={ FeedBack } />
>>>>>>> e214ae3... Requisito 13
        </Switch>
      </header>
    </div>
  );
}
