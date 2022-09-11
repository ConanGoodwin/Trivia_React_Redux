<<<<<<< HEAD
import { ADD_PLAYER_SCORE, RETURN_TO_THE_DEFAULT_STATE, RESET_SCORE } from '../actions';
=======
import { ADD_PLAYER_SCORE } from '../actions';
>>>>>>> 31eae55... reducer req9 parte

const dez = 10;

const INITIAL_STATE = {
  score: 0,
<<<<<<< HEAD
  assertions: 0,
=======
>>>>>>> 31eae55... reducer req9 parte
};

const converterDificultData = { hard: 3, medium: 2, easy: 1 };

const convertedDificult = (dif) => converterDificultData[dif];

const player = (state = INITIAL_STATE, action) => {
  const { score } = state;
  const { time, dificulty } = action;
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
  switch (action.type) {
  case ADD_PLAYER_SCORE:
    return { score: score + dez + (time * convertedDificult(dificulty)) };
>>>>>>> 31eae55... reducer req9 parte
  default:
    return state;
  }
};

export default player;
