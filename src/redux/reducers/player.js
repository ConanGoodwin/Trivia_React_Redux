<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ADD_PLAYER_SCORE, RETURN_TO_THE_DEFAULT_STATE, RESET_SCORE } from '../actions';
=======
import { ADD_PLAYER_SCORE } from '../actions';
>>>>>>> 31eae55... reducer req9 parte
=======
import { ADD_PLAYER_SCORE, RETURN_TO_THE_DEFAULT_STATE } from '../actions';
>>>>>>> 697dc67... correção do restart
=======
import { RESET_SCORE, ADD_PLAYER_SCORE } from '../actions';
>>>>>>> 9aba6d6... req 19

const dez = 10;

const INITIAL_STATE = {
  score: 0,
<<<<<<< HEAD
<<<<<<< HEAD
  assertions: 0,
=======
>>>>>>> 31eae55... reducer req9 parte
=======
  assertions: 0,
>>>>>>> 5a67e08... Requisitos 12,14,15
};

const converterDificultData = { hard: 3, medium: 2, easy: 1 };

const convertedDificult = (dif) => converterDificultData[dif];

const player = (state = INITIAL_STATE, action) => {
  const { score } = state;
  const { time, dificulty } = action;
<<<<<<< HEAD
<<<<<<< HEAD
  const newScore = score + dez + (time * convertedDificult(dificulty));

  switch (action.type) {
  case ADD_PLAYER_SCORE:
    return {
      ...state,
      score: newScore,
      assertions: action.assertions };
  case RETURN_TO_THE_DEFAULT_STATE:
    return INITIAL_STATE;
  case RESET_SCORE: return {
    ...state, score: action.newScore,
  };
=======
=======
  const newScore = score + dez + (time * convertedDificult(dificulty));
  console.log(time);

>>>>>>> 7f4f3dc... ajustes no teste assincrono
  switch (action.type) {
  case ADD_PLAYER_SCORE:
<<<<<<< HEAD
    return { score: score + dez + (time * convertedDificult(dificulty)) };
>>>>>>> 31eae55... reducer req9 parte
=======
    return {
      ...state,
      score: newScore,
      assertions: action.assertions };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5a67e08... Requisitos 12,14,15
=======
  case RETURN_TO_THE_DEFAULT_STATE:
    return INITIAL_STATE;
>>>>>>> 697dc67... correção do restart
=======
  case RESET_SCORE: return {
    ...state, score: action.newScore,
  };
>>>>>>> 9aba6d6... req 19
  default:
    return state;
  }
};

export default player;
