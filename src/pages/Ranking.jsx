import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import { connect } from 'react-redux';
import { addPlayerScore } from '../redux/actions';
import PlayerCard from '../components/PlayerCard';
import { getFromLocalStorage } from '../services/localStorage';
<<<<<<< HEAD
import './style/ranking.css';

const INITIAL_TIME = 30;
class Ranking extends Component {
  state = {
    ranking: getFromLocalStorage('ranking'),
  };

  handleClickGoHome = () => {
    const { history, dispatch } = this.props;

    dispatch(addPlayerScore(INITIAL_TIME, 0, 0));
    history.push('/');
  };

  render() {
    const { ranking } = this.state;
=======
=======
import { connect } from 'react-redux';
<<<<<<< HEAD
import { userScore } from '../redux/actions';
>>>>>>> 5e4c69a... add dispatch zerando o placar
=======
import { addPlayerScore } from '../redux/actions';
>>>>>>> 5a67e08... Requisitos 12,14,15
=======
>>>>>>> 9aba6d6... req 19

const INITIAL_TIME = 30;
class Ranking extends Component {
  state = {
    ranking: getFromLocalStorage('ranking'),
  };

  handleClickGoHome = () => {
    const { history, dispatch } = this.props;

    dispatch(addPlayerScore(INITIAL_TIME, 0, 0));
    history.push('/');
  };

<<<<<<< HEAD
>>>>>>> e924036... Requisitos 16 e 18
=======
  render() {
<<<<<<< HEAD
>>>>>>> 5e4c69a... add dispatch zerando o placar
=======
    const { ranking } = this.state;
>>>>>>> 9aba6d6... req 19
    return (
      <section>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
<<<<<<< HEAD
<<<<<<< HEAD
          className="button is-link is-outlined"
          onClick={ this.handleClickGoHome }
        >
          Play Again
        </button>
        {ranking.length > 0 && ranking
          .sort((a, b) => b.score - a.score).map((player, i) => (
            <PlayerCard key={ i } player={ player } />
          ))}
=======
          onClick={ () => history.push('/') }
=======
          onClick={ this.handleClickGoHome }
>>>>>>> 5e4c69a... add dispatch zerando o placar
        >
          Tela Inicial
        </button>
<<<<<<< HEAD
>>>>>>> e924036... Requisitos 16 e 18
=======
        {ranking.length > 0 && ranking
          .sort((a, b) => b.score - a.score).map((player, i) => (
            <PlayerCard key={ i } player={ player } index={ i } />
          ))}
>>>>>>> 9aba6d6... req 19
      </section>
    );
  }
}

Ranking.propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
  dispatch: PropTypes.func.isRequired,
=======
>>>>>>> e924036... Requisitos 16 e 18
=======
  dispatch: PropTypes.func.isRequired,
>>>>>>> 5e4c69a... add dispatch zerando o placar
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

<<<<<<< HEAD
<<<<<<< HEAD
export default connect()(Ranking);
=======
export default Ranking;
>>>>>>> e924036... Requisitos 16 e 18
=======
export default connect()(Ranking);
>>>>>>> 5e4c69a... add dispatch zerando o placar
