import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9517d64... refatorado para mexer no local storage quando computar os pontos, para evitar usuario fantasma no localstorage se sair no meio das perguntas"
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { returnToTheDefaultState } from '../redux/actions';
// import { addPlayerScore } from '../redux/actions';
import { addToLocalStorage, getFromLocalStorage } from '../services/localStorage';
import './style/feedback.css';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { returnToTheDefaultState } from '../redux/actions';
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
>>>>>>> 55b1962... add estilo da tela de feedback

const VALUE_FEEDBACK = 3;

class FeedBack extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
  componentDidMount() {
    const { score, name, email } = this.props;
    const storage = getFromLocalStorage('ranking');

    const imgURL = `https://www.gravatar.com/avatar/${md5(email).toString()}`;
    const currPlayer = { name, score, picture: imgURL };

    if (storage) {
      const newRanking = storage
        .filter((item) => item.name !== currPlayer.name);
      let actualRanking = storage
        .find((item) => item.name === currPlayer.name);

      if (!actualRanking) { actualRanking = { score: -1 }; }
      if (actualRanking.score < score) {
        addToLocalStorage('ranking', [currPlayer, ...newRanking]);
      } else {
        addToLocalStorage('ranking', [actualRanking, ...newRanking]);
      }
    } else {
      addToLocalStorage('ranking', [currPlayer]);
    }
  }

=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
  componentDidMount() {
    const { score, name, email } = this.props;
    const storage = getFromLocalStorage('ranking');

    const imgURL = `https://www.gravatar.com/avatar/${md5(email).toString()}`;
    const currPlayer = { name, score, picture: imgURL };

    if (storage) {
      const newRanking = storage
        .filter((item) => item.name !== currPlayer.name);
      let actualRanking = storage
        .find((item) => item.name === currPlayer.name);

      if (!actualRanking) { actualRanking = { score: -1 }; }
      if (actualRanking.score < score) {
        addToLocalStorage('ranking', [currPlayer, ...newRanking]);
      } else {
        addToLocalStorage('ranking', [actualRanking, ...newRanking]);
      }
    } else {
      addToLocalStorage('ranking', [currPlayer]);
    }
  }

>>>>>>> b9cf229... atualizando o ranking de acordo com o maior placar
  handleClickGoHome = () => {
    const { history, dispatch } = this.props;

    dispatch(returnToTheDefaultState());
<<<<<<< HEAD
    // dispatch(addPlayerScore(INITIAL_TIME, 0, 0));
<<<<<<< HEAD
    history.push('/');
  };

  handleClickGoRanking = () => {
    const { history } = this.props;

    history.push('/ranking');
  };

  render() {
    const { assertions } = this.props;
<<<<<<< HEAD
=======
=======
>>>>>>> b9cf229... atualizando o ranking de acordo com o maior placar
    history.push('/');
  };

  handleClickGoRanking = () => {
    const { history } = this.props;

    history.push('/ranking');
  };

  render() {
<<<<<<< HEAD
    const { history, score, assertions } = this.props;
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
    const { score, assertions } = this.props;
>>>>>>> fd55a0b... adicionado estilo a tela de login
=======
>>>>>>> 55b1962... add estilo da tela de feedback

    return (
      <div>
        <Header />
        {assertions >= VALUE_FEEDBACK
<<<<<<< HEAD
<<<<<<< HEAD
          ? <p data-testid="feedback-text" className="done">Well Done!</p>
          : <p data-testid="feedback-text" className="better">Could be better...</p>}
        {/* <h4>Total de perguntas certas:</h4> */}
        {/* <p data-testid="feedback-total-score">{score}</p> */}
        {/* <h4>Total de pontos:</h4> */}
        <p data-testid="feedback-total-question" className="assertions">{assertions}</p>
        <button
          type="button"
          data-testid="btn-ranking"
          className="button is-success is-outlined"
          onClick={ this.handleClickGoRanking }
=======
          ? <p data-testid="feedback-text">Well Done!</p>
          : <p data-testid="feedback-text">Could be better...</p>}
=======
          ? <p data-testid="feedback-text" className="done">Well Done!</p>
          : <p data-testid="feedback-text" className="better">Could be better...</p>}
>>>>>>> 55b1962... add estilo da tela de feedback
        {/* <h4>Total de perguntas certas:</h4> */}
        {/* <p data-testid="feedback-total-score">{score}</p> */}
        {/* <h4>Total de pontos:</h4> */}
        <p data-testid="feedback-total-question" className="assertions">{assertions}</p>
        <button
          type="button"
          data-testid="btn-ranking"
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={ () => history.push('/ranking') }
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
=======
          className="button is-success is-outlined"
>>>>>>> 55b1962... add estilo da tela de feedback
          onClick={ this.handleClickGoRanking }
>>>>>>> fd55a0b... adicionado estilo a tela de login
        >
          Ranking
        </button>
        <button
          type="button"
          data-testid="btn-play-again"
<<<<<<< HEAD
<<<<<<< HEAD
          className="button is-link is-outlined"
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
          className="button is-link is-outlined"
>>>>>>> 55b1962... add estilo da tela de feedback
          onClick={ this.handleClickGoHome }
        >
          Play Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.player,
<<<<<<< HEAD
<<<<<<< HEAD
  ...state.user,
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
  ...state.user,
>>>>>>> 9517d64... refatorado para mexer no local storage quando computar os pontos, para evitar usuario fantasma no localstorage se sair no meio das perguntas"
});

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
=======
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
>>>>>>> 9517d64... refatorado para mexer no local storage quando computar os pontos, para evitar usuario fantasma no localstorage se sair no meio das perguntas"
};

export default connect(mapStateToProps)(FeedBack);
