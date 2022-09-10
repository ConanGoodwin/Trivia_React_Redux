import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { addPlayerScore } from '../redux/actions';
import PlayerCard from '../components/PlayerCard';
import { getFromLocalStorage } from '../services/localStorage';
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

class Ranking extends Component {
  render() {
    const { history } = this.props;

>>>>>>> e924036... Requisitos 16 e 18
    return (
      <section>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
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
        >
          Tela Inicial
        </button>
>>>>>>> e924036... Requisitos 16 e 18
      </section>
    );
  }
}

Ranking.propTypes = {
<<<<<<< HEAD
  dispatch: PropTypes.func.isRequired,
=======
>>>>>>> e924036... Requisitos 16 e 18
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

<<<<<<< HEAD
export default connect()(Ranking);
=======
export default Ranking;
>>>>>>> e924036... Requisitos 16 e 18
