import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
<<<<<<< HEAD
function BtnRespText({ answer, index, results, indexResp,
  handleClickAnswer, isAnswer, correctClass, id }) {
=======
function BtnRespText({ answer, indexResp, index }) {
>>>>>>> f60df1c... style: retirado erros de lint
=======
function BtnRespText({ answer, index, results, indexResp,
  handleClickAnswer, isAnswer, correctClass, id }) {
>>>>>>> f58b704... feat: mega refatoração para inserir a resposta dada e registrar os pontos
  function decodeEntity(inputStr) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = inputStr;
    return textarea.value;
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    (indexResp !== index)
      ? (
        <button
          key={ index }
          type="button"
          data-testid={ id }
          name={ answer }
          onClick={ (e) => {
            const { difficulty } = results;
            handleClickAnswer(e, difficulty, index);
          } }
          disabled={ isAnswer }
          className={ correctClass }
        >
          {decodeEntity(answer)}
        </button>
      ) : (
        <button
          key={ index }
          type="button"
          data-testid="correct-answer"
          name={ answer }
          onClick={ (e) => {
            const { difficulty } = results;
            handleClickAnswer(e, difficulty, index);
          } }
          disabled={ isAnswer }
          className={
            `has-tooltip-arrow has-tooltip-arrow
             has-tooltip-active has-tooltip-bottom ${correctClass}`
          }
          data-tooltip="Resposta dada!"
        >
          {decodeEntity(answer)}
        </button>
=======
    (indexResp === index)
=======
    (indexResp !== index)
>>>>>>> f58b704... feat: mega refatoração para inserir a resposta dada e registrar os pontos
      ? (
        <button
          key={ index }
          type="button"
          data-testid={ id }
          name={ answer }
          onClick={ (e) => {
            const { difficulty } = results;
            handleClickAnswer(e, difficulty, index);
          } }
          disabled={ isAnswer }
          className={ correctClass }
        >
          {decodeEntity(answer)}
        </button>
      ) : (
<<<<<<< HEAD
        <div>
          { decodeEntity(answer) }
        </div>

>>>>>>> f60df1c... style: retirado erros de lint
=======
        <button
          key={ index }
          type="button"
          data-testid="correct-answer"
          name={ answer }
          onClick={ (e) => {
            const { difficulty } = results;
            handleClickAnswer(e, difficulty, index);
          } }
          disabled={ isAnswer }
          className={
            `has-tooltip-arrow has-tooltip-arrow
             has-tooltip-active has-tooltip-bottom ${correctClass}`
          }
          data-tooltip="Resposta dada!"
        >
          {decodeEntity(answer)}
        </button>
>>>>>>> f58b704... feat: mega refatoração para inserir a resposta dada e registrar os pontos
      )
  );
}

BtnRespText.propTypes = {
  answer: PropTypes.string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f58b704... feat: mega refatoração para inserir a resposta dada e registrar os pontos
  index: PropTypes.number.isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  isAnswer: PropTypes.bool.isRequired,
  correctClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  indexResp: PropTypes.number.isRequired,
  results: PropTypes.shape({
    difficulty: PropTypes.string.isRequired,
  }),
};

BtnRespText.defaultProps = {
  results: '',
<<<<<<< HEAD
=======
  indexResp: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
>>>>>>> f60df1c... style: retirado erros de lint
=======
>>>>>>> f58b704... feat: mega refatoração para inserir a resposta dada e registrar os pontos
};

export default BtnRespText;
