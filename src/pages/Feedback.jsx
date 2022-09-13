import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { returnToTheDefaultState } from '../redux/actions';
// import { addPlayerScore } from '../redux/actions';
import { addToLocalStorage, getFromLocalStorage } from '../services/localStorage';
import './style/feedback.css';
=======
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { returnToTheDefaultState } from '../redux/actions';
>>>>>>> 88ad2c1... o problema era uma letra maiuscula

const VALUE_FEEDBACK = 3;

class FeedBack extends Component {
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
  handleClickGoHome = () => {
    const { history, dispatch } = this.props;

    dispatch(returnToTheDefaultState());
<<<<<<< HEAD
    // dispatch(addPlayerScore(INITIAL_TIME, 0, 0));
    history.push('/');
  };

  handleClickGoRanking = () => {
    const { history } = this.props;

    history.push('/ranking');
  };

  render() {
    const { assertions } = this.props;
=======
    history.push('/');
  };

  render() {
    const { history, score, assertions } = this.props;
>>>>>>> 88ad2c1... o problema era uma letra maiuscula

    return (
      <div>
        <Header />
        {assertions >= VALUE_FEEDBACK
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
        {/* <h4>Total de perguntas certas:</h4> */}
        <p data-testid="feedback-total-score">{score}</p>
        {/* <h4>Total de pontos:</h4> */}
        <p data-testid="feedback-total-question">{assertions}</p>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
        >
          Ranking
        </button>
        <button
          type="button"
          data-testid="btn-play-again"
<<<<<<< HEAD
          className="button is-link is-outlined"
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
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
  ...state.user,
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
});

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
<<<<<<< HEAD
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
=======
>>>>>>> 88ad2c1... o problema era uma letra maiuscula
};

export default connect(mapStateToProps)(FeedBack);
