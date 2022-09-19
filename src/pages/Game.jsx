import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { fetchQuestion, addPlayerScore } from '../redux/actions';
=======
import { fetchQuestion, userScore } from '../redux/actions';
>>>>>>> e214ae3... Requisito 13
=======
import { fetchQuestion, userScore, addPlayerScore } from '../redux/actions';
>>>>>>> 0ce4291... esquema do setTime
=======
import { fetchQuestion, addPlayerScore } from '../redux/actions';
>>>>>>> 5a67e08... Requisitos 12,14,15
import { delToken } from '../services/saveToken';
<<<<<<< HEAD
import Header from '../components/Header';
<<<<<<< HEAD
<<<<<<< HEAD
import Timer from '../components/Timer';
<<<<<<< HEAD
<<<<<<< HEAD
import './style/Game.css';
import BtnRespText from '../components/BtnRespText';

const NORMAL_BTN = 'inicial';
const CORRECT_BTN = 'correct';
const WRONG_BTN = 'incorrect';
=======
>>>>>>> e07b5e5... isAnswer moldando as coisas na tela
=======
>>>>>>> 0bb80a3... teste2
=======
// import user from '../redux/reducers/user';
>>>>>>> e214ae3... Requisito 13
=======
>>>>>>> 046454c... retira comentários desnecessários
=======
import './style/Game.css';
>>>>>>> 43f56a2... Adiciona requisito 7

class Game extends Component {
  constructor() {
    super();
    this.state = {
      indexQuestion: 0,
      randomAnswer: [
        {
          answer: '',
          isCorrect: false,
        },
      ],
      isAnswer: false,
<<<<<<< HEAD
<<<<<<< HEAD
      score: 1,
      time: 30,
<<<<<<< HEAD
<<<<<<< HEAD
      wrongClass: NORMAL_BTN,
      correctClass: NORMAL_BTN,
      indexResp: -1,
=======
      score: 0,
>>>>>>> e214ae3... Requisito 13
=======
      score: 1,
<<<<<<< HEAD
>>>>>>> 5fef7a0... retirado testes
=======
      time: 0,
>>>>>>> 0ce4291... esquema do setTime
=======
>>>>>>> 7f4f3dc... ajustes no teste assincrono
=======
      wrongClass: 'initial',
      correctClass: 'initial',
>>>>>>> 43f56a2... Adiciona requisito 7
    };
  }

  async componentDidMount() {
    this.newGame();
  }

  newGame = async () => {
    const { dispatch, token } = this.props;
    await dispatch(fetchQuestion(token));
    this.setState({ indexQuestion: 0 }, () => {
      const { results, responseCode } = this.props;
      if (responseCode === 0) {
        this.shuffleAnswer(0, results);
      }
    });
  };

  buildOrderAnswer = (index, array) => {
    if (array.length === 0) return [];
    let orderAnswer = [{ answer: array[index].correct_answer, isCorrect: true }];
    array[index].incorrect_answers.forEach((item) => {
      orderAnswer = [...orderAnswer, { answer: item, isCorrect: false }];
    });
    return orderAnswer;
  };

  shuffleAnswer = (index, array) => {
    const RANGE = 0.5;
    const TEMP = 3;
    const randomIndexArray = [0, 1, 2, TEMP].sort(() => Math.random() - RANGE);
    const randomBoolIndexArray = [0, 1].sort(() => Math.random() - RANGE);
    const orderAnswer = this.buildOrderAnswer(index, array);
    if (array[index].type === 'multiple') {
      const disorderAnswer = randomIndexArray.map((i) => orderAnswer[i]);
      this.setState({ randomAnswer: disorderAnswer });
    } else if (array[index].type === 'boolean') {
      const disorderAnswer = randomBoolIndexArray.map((i) => orderAnswer[i]);
      this.setState({ randomAnswer: disorderAnswer });
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  handleClickAnswer = ({ target: { name } }, difficulty = 'nothing here', i) => {
    this.setState({
      isAnswer: true,
      wrongClass: WRONG_BTN,
      correctClass: CORRECT_BTN,
      indexResp: i }, () => {
      const { dispatch } = this.props;
      const { randomAnswer, score } = this.state;
      const filterRadomAnswer = randomAnswer
        .filter(({ isCorrect }) => isCorrect === true);
      if (name === filterRadomAnswer[0].answer) {
        this.setState((prevState) => ({
          score: prevState.score + 1,
        }), async () => {
          const { time } = this.state;
          await dispatch(addPlayerScore(time, difficulty, score));
        });
=======
  handleClickAnswer = ({ target: { name } }) => {
=======
  handleClickAnswer = ({ target: { name } }, difficulty = 'nothing here') => {
<<<<<<< HEAD
>>>>>>> 0ce4291... esquema do setTime
    this.setState({ isAnswer: true }, () => {
=======
    this.setState({
      isAnswer: true, wrongClass: 'incorrect', correctClass: 'correct' }, () => {
>>>>>>> 43f56a2... Adiciona requisito 7
      const { dispatch } = this.props;
      const { randomAnswer, score } = this.state;
      const filterRadomAnswer = randomAnswer
        .filter(({ isCorrect }) => isCorrect === true);

      if (name === filterRadomAnswer[0].answer) {
        this.setState((prevState) => ({
          score: prevState.score + 1,
<<<<<<< HEAD
        }));
>>>>>>> e214ae3... Requisito 13
=======
        }), async () => {
          const { time } = this.state;
          // await dispatch(userScore(score));
          await dispatch(addPlayerScore(time, difficulty, score));
        });
>>>>>>> 5fef7a0... retirado testes
      }
    });
  };

  setTime = (newTime) => this.setState({ time: newTime });

  handleClickNext = () => {
    const { indexQuestion } = this.state;
<<<<<<< HEAD
<<<<<<< HEAD
    const { results, history } = this.props;
=======
    const { results, dispatch, history } = this.props;
>>>>>>> e214ae3... Requisito 13
=======
    const { results, history } = this.props;
>>>>>>> 9db508b... dispatch deslocado
    const MAX_QUESTIONS = 4;
    if (indexQuestion < MAX_QUESTIONS) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this.setState({ indexQuestion: indexQuestion + 1,
        isAnswer: false,
        wrongClass: NORMAL_BTN,
        correctClass: NORMAL_BTN,
        indexResp: -1 }, () => {
=======
      this.setState({ indexQuestion: indexQuestion + 1, isAnswer: false }, () => {
<<<<<<< HEAD
>>>>>>> 36b040f... concertando o isAnswer para o next
=======
      this.setState({ indexQuestion: indexQuestion + 1 }, () => {
<<<<<<< HEAD
>>>>>>> 0bb80a3... teste2
=======
        const { score } = this.state;
        dispatch(userScore(score));
>>>>>>> e214ae3... Requisito 13
=======
>>>>>>> 9db508b... dispatch deslocado
=======
      this.setState({ indexQuestion: indexQuestion + 1,
        isAnswer: false,
        wrongClass: 'initial',
        correctClass: 'initial' }, () => {
>>>>>>> 43f56a2... Adiciona requisito 7
        this.shuffleAnswer(indexQuestion + 1, results);
      });
    } else {
      history.push('/feedback');
    }
  };

  decodeEntity(inputStr) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = inputStr;
    return textarea.value;
  }

  render() {
    const { randomAnswer, indexQuestion, isAnswer,
<<<<<<< HEAD
      wrongClass, correctClass, indexResp } = this.state;
=======
      wrongClass, correctClass } = this.state;
>>>>>>> 43f56a2... Adiciona requisito 7
    const { results, responseCode } = this.props;
    const START_INDEX = -1;
    const ERROR_API_CODE = 3;
    let indexWrongAnswer = START_INDEX;
    return (
      <main>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Header />
        {!isAnswer && <Timer
          handleClickAnswer={ this.handleClickAnswer }
          setTime={ this.setTime }
        />}
<<<<<<< HEAD
=======
=======
        <Header />
<<<<<<< HEAD
>>>>>>> 781be95... Requisito 5 - adiciona header
=======
        {!isAnswer && <Timer
          handleClickAnswer={ this.handleClickAnswer }
        />}
>>>>>>> e07b5e5... isAnswer moldando as coisas na tela
=======
>>>>>>> 0bb80a3... teste2
        {(indexQuestion === 0) && (<p>new game</p>)}
>>>>>>> b2ff96d... adicionado detalhe no paragrafo new game
=======
        {/* {(indexQuestion === 0) && (<p>new game</p>)} */}
>>>>>>> fd55a0b... adicionado estilo a tela de login
        {
          (responseCode === ERROR_API_CODE) && (delToken())
        }
        {
          (responseCode === ERROR_API_CODE) ? (<Redirect to="/" />)
            : (
              <section>
<<<<<<< HEAD
                <h2 data-testid="question-category" className="category">
=======
                <h2 data-testid="question-category">
>>>>>>> 86b554f... consertado quotes dos textos
                  {
                    this.decodeEntity(results[indexQuestion].category)
                  }
                </h2>
<<<<<<< HEAD
                <p data-testid="question-text" className="question">
=======
                <p data-testid="question-text">
>>>>>>> 86b554f... consertado quotes dos textos
                  {
                    this.decodeEntity(results[indexQuestion].question)
                  }
                </p>
                <div data-testid="answer-options">
                  {
                    randomAnswer.map((item, index) => {
                      const { answer } = item;
                      if (results[indexQuestion].correct_answer !== item.answer) {
                        indexWrongAnswer += 1;
                      }
                      return (
                        (results[indexQuestion].correct_answer === item.answer)
                          ? (
                            <BtnRespText
                              key={ index }
<<<<<<< HEAD
                              id="correct-answer"
                              answer={ answer }
                              index={ index }
                              results={ results[indexQuestion] }
                              handleClickAnswer={ this.handleClickAnswer }
                              isAnswer={ isAnswer }
                              correctClass={ correctClass }
                              indexResp={ indexResp }
                            />
=======
                              type="button"
                              data-testid="correct-answer"
                              name={ item.answer }
<<<<<<< HEAD
                              onClick={ this.handleClickAnswer }
=======
                              onClick={ (e) => {
                                const { difficulty } = results[indexQuestion];
                                this.handleClickAnswer(e, difficulty);
                              } }
                              disabled={ isAnswer }
<<<<<<< HEAD
>>>>>>> 0ce4291... esquema do setTime
=======
                              className={ correctClass }
>>>>>>> 43f56a2... Adiciona requisito 7
                            >
                              {this.decodeEntity(item.answer)}
                            </button>
>>>>>>> fde2d08... Requisito 10
                          )
                          : (
                            <BtnRespText
                              key={ index }
<<<<<<< HEAD
                              id={ `wrong-answer-${indexWrongAnswer}` }
                              answer={ answer }
                              index={ index }
                              results={ results[indexQuestion] }
                              handleClickAnswer={ this.handleClickAnswer }
                              isAnswer={ isAnswer }
                              correctClass={ wrongClass }
                              indexResp={ indexResp }
                            />
=======
                              type="button"
                              data-testid={ `wrong-answer-${indexWrongAnswer}` }
                              name={ item.answer }
                              onClick={ this.handleClickAnswer }
<<<<<<< HEAD
=======
                              disabled={ isAnswer }
                              className={ wrongClass }
>>>>>>> 43f56a2... Adiciona requisito 7
                            >
                              {this.decodeEntity(item.answer)}
                            </button>
>>>>>>> fde2d08... Requisito 10
                          )
                      );
                    })
                  }
                </div>
<<<<<<< HEAD
                <div className="btnNext">
                  {(isAnswer) && (
                    <button
                      type="button"
                      data-testid="btn-next"
                      className="button is-link"
                      onClick={ this.handleClickNext }
                    >
                      Next
                    </button>
                  )}
                </div>
=======
                {(isAnswer) && (
                  <button
                    type="button"
                    data-testid="btn-next"
                    onClick={ this.handleClickNext }
                  >
                    Next
                  </button>
                )}
>>>>>>> fde2d08... Requisito 10
              </section>
            )
        }
      </main>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  responseCode: PropTypes.number.isRequired,
  results: PropTypes.shape({
    category: PropTypes.string,
    correct_answer: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    type: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
<<<<<<< HEAD
  })).isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
=======
>>>>>>> f8a3d01... corrige erro PropTypes results
=======

  }).isRequired,
>>>>>>> 0bb80a3... teste2
=======
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
<<<<<<< HEAD
  tokenObj: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }).isRequired,
>>>>>>> e214ae3... Requisito 13
=======
>>>>>>> c47a21d... Fix bug conflito requisitos 8 e 13, 13 quebrando no teste
};

const mapStateToProps = ({ token: { tokenObj }, questions }) => {
  const { response_code: responseCode, results } = questions;
  return ({
    ...tokenObj,
    responseCode,
    results,
  });
};

export default connect(mapStateToProps)(Game);
