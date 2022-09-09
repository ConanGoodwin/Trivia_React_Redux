import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
<<<<<<< HEAD
import './style/header.css';

class Header extends React.Component {
  render() {
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

class Header extends React.Component {
  render() {
    const { name, email } = this.props;

    return (
      <header>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          alt="avatar"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">0</p>
>>>>>>> 781be95... Requisito 5 - adiciona header

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
>>>>>>> 781be95... Requisito 5 - adiciona header
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
<<<<<<< HEAD
  score: PropTypes.number.isRequired,
=======
>>>>>>> 781be95... Requisito 5 - adiciona header
};

export default connect(mapStateToProps)(Header);
