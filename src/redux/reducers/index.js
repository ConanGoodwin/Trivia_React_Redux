import { combineReducers } from 'redux';
import user from './user';
import token from './token';
import questions from './questions';
<<<<<<< HEAD
import player from './player';

const rootReducer = combineReducers({ user, token, questions, player });
=======
import score from './score';
import player from './player';

<<<<<<< HEAD
const rootReducer = combineReducers({ user, token, questions, score });
>>>>>>> e214ae3... Requisito 13
=======
const rootReducer = combineReducers({ user, token, questions, score, player });
>>>>>>> 31eae55... reducer req9 parte

export default rootReducer;
