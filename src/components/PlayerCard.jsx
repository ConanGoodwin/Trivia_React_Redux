import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

export default class PlayerCard extends Component {
  render() {
    const { player: { name, picture, score, index } } = this.props;

    return (
<<<<<<< HEAD
      <div className="cabecalho playercard">
        <figure className="image is-48x48">
          <img
            src={ picture }
            alt="avatar"
            className="is-rounded"
          />
        </figure>
=======
      <div>
<<<<<<< HEAD
        <p>{picture}</p>
>>>>>>> 9aba6d6... req 19
=======
        <img
          src={ `https://www.gravatar.com/avatar/${md5(picture).toString()}` }
          alt="avatar"
          data-testid="header-profile-picture"
        />
>>>>>>> fd55a0b... adicionado estilo a tela de login
        <p data-testid={ `player-name-${index}` }>{name}</p>
        <p data-testid={ `player-score-${index}` }>{score}</p>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  name: PropTypes.string,
}.isRequired;
