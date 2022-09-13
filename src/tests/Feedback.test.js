import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockedTokenResponse from './helpers/mockedTokenResponse';
import {questionsResponse} from './helpers/mockedQuestionResponse'
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'

<<<<<<< HEAD
<<<<<<< HEAD
const [validEmail, Name] = ['joaozinhoDoMinecraft@gmail.com', 'adimin4002'];
const urlToTakeToken = "https://opentdb.com/api_token.php?command=request"
const sleep = ms => new Promise(r => setTimeout(r, ms)); // by https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

const doTheLogin = () =>{
  const emailInput = screen.getByTestId('input-gravatar-email');
  const nameInput = screen.getByTestId('input-player-name');
  const playBtn = screen.getByTestId('btn-play');

  userEvent.type(emailInput, validEmail);
  userEvent.type(nameInput, Name);
  userEvent.click(playBtn);
};
=======
const [validEmail, validName] = ['joaozinhoDoMinecraft@gmail.com', 'adimin4002'];
=======
const [validEmail, Name] = ['joaozinhoDoMinecraft@gmail.com', 'adimin4002'];
>>>>>>> 55400de... pro bot rodar
const urlToTakeToken = "https://opentdb.com/api_token.php?command=request"
const sleep = ms => new Promise(r => setTimeout(r, ms)); // by https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
>>>>>>> 3fd24ab... testes semi prontos

const doTheLogin = () =>{
  const emailInput = screen.getByTestId('input-gravatar-email');
  const nameInput = screen.getByTestId('input-player-name');
  const playBtn = screen.getByTestId('btn-play');

  userEvent.type(emailInput, validEmail);
  userEvent.type(nameInput, Name);
  userEvent.click(playBtn);
};

const repeatFuncNTimes = async (func,times) => {
 for(let i = 0; i < times; i++) {
  await func();
 }
};

const loseQuestion = async () => {
  userEvent.click(screen.getByTestId('wrong-answer-0'));
  userEvent.click(screen.getByTestId('btn-next'));
};

const gainQuestion = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  await sleep(100);
  userEvent.click(screen.getByTestId('correct-answer'));
=======
  await sleep(200);
  userEvent.click(screen.getByTestId('correct-answer'));
  await sleep(200);
>>>>>>> 3fd24ab... testes semi prontos
=======
  await sleep(1100);
=======
  await sleep(100);
>>>>>>> c8e9d08... ta rolando algum problema c o teste
  userEvent.click(screen.getByTestId('correct-answer'));
>>>>>>> 7f4f3dc... ajustes no teste assincrono
  userEvent.click(screen.getByTestId('btn-next'));
};

const generateScoreGame = async (gains) =>{
  const loses = 5 - gains;
  await repeatFuncNTimes(gainQuestion,gains);
  await repeatFuncNTimes(loseQuestion,loses);
};

<<<<<<< HEAD
<<<<<<< HEAD
describe('feedbacks page tests part1', ()=>{
  beforeEach(()=>{
    global.fetch = jest.fn((url) => {
      const mResponse = (url === urlToTakeToken) ? mockedTokenResponse : questionsResponse;
      return({
      json: jest.fn().mockReturnValue(mResponse),
    })});

    renderWithRouterAndRedux(<App />);
    doTheLogin();
=======
describe('feedbacks page tests', ()=>{
=======
describe('feedbacks page tests part1', ()=>{
>>>>>>> bcfd150... ultmos testes, os relacionados ao "restart game"
  beforeEach(()=>{
    global.fetch = jest.fn((url) => {
      const mResponse = (url === urlToTakeToken) ? mockedTokenResponse : questionsResponse;
      return({
      json: jest.fn().mockReturnValue(mResponse),
    })});

<<<<<<< HEAD
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/game'],
      initialState: {
          user: {
            name: validName,
            email: validEmail,
          },
          token: {
            isFetching: false,
            tokenObj: {
              response_code: 0,
              response_message: 'Token Generated Successfully!',
              token: '84e0fce4b4d2966a83c6b52cad893076c434fd29d754a1c4b7ec3894c1c6d313'
            },
            error: ''
          },
      }
    });
>>>>>>> 3fd24ab... testes semi prontos
=======
    renderWithRouterAndRedux(<App />);
    doTheLogin();
>>>>>>> 9d0f556... 17 funcionando
  });

  it('verify if the feedback message is correct (lose case)', async () => {
    await generateScoreGame(1);
    expect(screen.getByTestId('feedback-text').textContent).toEqual('Could be better...')
  });

  it('verify if the feedback message is correct (winer case)', async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    await generateScoreGame(3);
=======
    await generateScoreGame(4);
>>>>>>> 3fd24ab... testes semi prontos
=======
    await generateScoreGame(3);
>>>>>>> c8e9d08... ta rolando algum problema c o teste
    expect(screen.getByTestId('feedback-text').textContent).toEqual('Well Done!')
  });

  it('verify if the user feedback data is in the document', async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    await generateScoreGame(2);
    expect(screen.getByTestId('header-player-name').textContent).toBe(Name);
    expect(screen.getByTestId('feedback-total-score').textContent).toBe('140');
    expect(screen.getByTestId('feedback-total-question').textContent).toBe('2');
  });

  it('verify if the ranking button works as expected', async () => {
    await generateScoreGame(1);
    const btnRanking = screen.getByTestId('btn-ranking');
    userEvent.click(btnRanking);
    expect(screen.getByTestId('ranking-title').textContent).toBe('Ranking');
    
  });

});
describe('feedback pages test part2',()=>{
  beforeEach(()=>{
    global.fetch = jest.fn((url) => {
      const mResponse = (url === urlToTakeToken) ? mockedTokenResponse : questionsResponse;
      return{json: jest.fn().mockReturnValue(mResponse),}
  });
  });

  it('verify if the play again button work as expected', async ()=>{
    const { store } = renderWithRouterAndRedux(<App />);
    doTheLogin();
    
    await generateScoreGame(1); // in the end it will be change
    userEvent.click(screen.getByTestId('btn-play-again'));

    const emailInput = screen.getByTestId('input-gravatar-email');
    const nameInput = screen.getByTestId('input-player-name');
    const playBtn = screen.getByTestId('btn-play');

    expect(playBtn).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(store.getState().player).toEqual({score: 0 , assertions: 0});

    // aprender a trocar o mock de acordo com a chamada pra fzr a proxima parte
=======
    await generateScoreGame(5);
    expect(screen.getByTestId('header-player-name').textContent).toBe(validName);
    expect(screen.getByTestId('feedback-total-score').textContent).toBe('350');
    expect(screen.getByTestId('feedback-total-question').textContent).toBe('5');
>>>>>>> 3fd24ab... testes semi prontos
=======
    await generateScoreGame(3);
    expect(screen.getByTestId('header-player-name').textContent).toBe(validName);
    expect(screen.getByTestId('feedback-total-score').textContent).toBe('204');
    expect(screen.getByTestId('feedback-total-question').textContent).toBe('3');
>>>>>>> 7f4f3dc... ajustes no teste assincrono
=======
    await generateScoreGame(2);
    expect(screen.getByTestId('header-player-name').textContent).toBe(Name);
    expect(screen.getByTestId('feedback-total-score').textContent).toBe('140');
    expect(screen.getByTestId('feedback-total-question').textContent).toBe('2');
>>>>>>> c8e9d08... ta rolando algum problema c o teste
  });

  it('verify if the ranking button works as expected', async () => {
    await generateScoreGame(1);
    const btnRanking = screen.getByTestId('btn-ranking');
    userEvent.click(btnRanking);
    expect(screen.getByTestId('ranking-title').textContent).toBe('Ranking');
<<<<<<< HEAD
  });

});

=======
    
  });

});
>>>>>>> 9d0f556... 17 funcionando
describe('feedback pages test part2',()=>{
  beforeEach(()=>{
    global.fetch = jest.fn((url) => {
      const mResponse = (url === urlToTakeToken) ? mockedTokenResponse : questionsResponse;
      return{json: jest.fn().mockReturnValue(mResponse),}
  });
  });

  it('verify if the play again button work as expected', async ()=>{
    const { store } = renderWithRouterAndRedux(<App />);
    doTheLogin();
    
    await generateScoreGame(1); // in the end it will be change
    userEvent.click(screen.getByTestId('btn-play-again'));

    const emailInput = screen.getByTestId('input-gravatar-email');
    const nameInput = screen.getByTestId('input-player-name');
    const playBtn = screen.getByTestId('btn-play');

    expect(playBtn).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(store.getState().player).toEqual({score: 0 , assertions: 0});

    // aprender a trocar o mock de acordo com a chamada pra fzr a proxima parte
  });
});