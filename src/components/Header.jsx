import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style/header.css';

class Header extends React.Component {
  render() {
<<<<<<< HEAD
<<<<<<< HEAD
    const { name, email, score } = this.props;

    return (
      <header className="cabecalho">
        <figure className="image is-128x128">
          <img
            src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
            alt="avatar"
            className="is-rounded"
            data-testid="header-profile-picture"
          />
        </figure>
        <p data-testid="header-player-name" className="user">{name}</p>
        <p className="borderScore">
          <div className="subBorder">
            Placar:
            {' '}
            <span data-testid="header-score" className="score">
              {score}
            </span>
          </div>
        </p>
=======
    const { name, email, totalHits } = this.props;
=======
    const { name, email, totalScore } = this.props;
>>>>>>> 040749c... pontos no header

    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          alt="avatar"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
<<<<<<< HEAD
        <p data-testid="header-score">{totalHits}</p>
>>>>>>> e214ae3... Requisito 13
=======
        <p data-testid="header-score">{totalScore}</p>
>>>>>>> 040749c... pontos no header

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
<<<<<<< HEAD
  ...state.player,
=======
  ...state.score,
<<<<<<< HEAD
>>>>>>> e214ae3... Requisito 13
=======
  totalScore: state.player.score,
>>>>>>> 040749c... pontos no header
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  score: PropTypes.number.isRequired,
=======
  totalHits: PropTypes.number.isRequired,
>>>>>>> e214ae3... Requisito 13
=======
  totalScore: PropTypes.number.isRequired,
>>>>>>> 040749c... pontos no header
};

export default connect(mapStateToProps)(Header);
