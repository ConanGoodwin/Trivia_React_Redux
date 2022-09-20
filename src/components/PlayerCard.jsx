import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlayerCard extends Component {
  render() {
    const { player: { name, picture, score, index } } = this.props;

    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="cabecalho playercard">
=======
      <div className="cabecalho">
>>>>>>> 2d82538... inserido imagem do player no ranking
        <figure className="image is-48x48">
          <img
            src={ picture }
            alt="avatar"
            className="is-rounded"
          />
        </figure>
<<<<<<< HEAD
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
=======
>>>>>>> 2d82538... inserido imagem do player no ranking
        <p data-testid={ `player-name-${index}` }>{name}</p>
        <p data-testid={ `player-score-${index}` }>{score}</p>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  name: PropTypes.string,
}.isRequired;
