export const NEW_LOGIN = 'NEW_LOGIN';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const CURRENT_TOKEN = 'CURRENT_TOKEN';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const REQUEST_QUESTION = 'REQUEST_QUESTION';
export const CURRENT_QUESTION = 'CURRENT_QUESTION';
export const FAILED_QUESTION = 'FAILED_QUESTION';
<<<<<<< HEAD
<<<<<<< HEAD
export const ADD_PLAYER_SCORE = 'ADD_PLAYER_SCORE';
<<<<<<< HEAD
export const RETURN_TO_THE_DEFAULT_STATE = 'RESTART_TO_THE_DEFAULT_STATE';
<<<<<<< HEAD
export const RESET_SCORE = 'RESET_SCORE';
=======
export const USER_SCORE = 'USER_SCORE';
<<<<<<< HEAD
>>>>>>> e214ae3... Requisito 13
=======
=======
>>>>>>> 5a67e08... Requisitos 12,14,15
export const ADD_PLAYER_SCORE = 'ADD_PLAYER_SCORE';
>>>>>>> 31eae55... reducer req9 parte
=======
>>>>>>> 697dc67... correção do restart
=======
export const RESET_SCORE = 'RESET_SCORE';
>>>>>>> 9aba6d6... req 19

export const newLogin = (payLoad) => ({
  type: NEW_LOGIN,
  payLoad,
});

const requestToken = () => ({ type: REQUEST_TOKEN });
const currentToken = (tokenObj) => ({ type: CURRENT_TOKEN, tokenObj });
const failedRequest = (errorMsg) => ({ type: FAILED_REQUEST, errorMsg });

export const fetchToken = () => async (dispatch) => {
  dispatch(requestToken());

  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch(currentToken(data));
  } catch (erro) {
    dispatch(failedRequest(erro.message));
  }
};

const requestQuestion = () => ({ type: REQUEST_QUESTION });
const currentQuestion = (questionObj) => ({ type: CURRENT_QUESTION, questionObj });
const failedQuestion = (errorMsg) => ({ type: FAILED_QUESTION, errorMsg });

export const fetchQuestion = (token) => async (dispatch) => {
  dispatch(requestQuestion());

  try {
    let response;
    if (token) {
      response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    }
    const data = await response.json();
    dispatch(currentQuestion(data));
  } catch (erro) {
    dispatch(failedQuestion(erro.message));
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
export const addPlayerScore = (time, dificulty, assertions) => ({
  type: ADD_PLAYER_SCORE,
  time,
  dificulty,
  assertions,
});

export const returnToTheDefaultState = () => ({ type: RETURN_TO_THE_DEFAULT_STATE });
export const resetScore = (newScore) => ({ type: RESET_SCORE, newScore });
=======
export const userScore = (payLoad) => ({
  type: USER_SCORE,
  payLoad,
});
<<<<<<< HEAD
>>>>>>> e214ae3... Requisito 13
=======

export const addPlayerScore = (time, dificulty) => ({
=======
export const addPlayerScore = (time, dificulty, assertions) => ({
>>>>>>> 5a67e08... Requisitos 12,14,15
  type: ADD_PLAYER_SCORE,
  time,
  dificulty,
  assertions,
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 31eae55... reducer req9 parte
=======

export const returnToTheDefaultState = () => ({ type: RETURN_TO_THE_DEFAULT_STATE });
>>>>>>> 697dc67... correção do restart
=======

export const resetScore = (newScore) => ({ type: RESET_SCORE, newScore });
>>>>>>> 9aba6d6... req 19
