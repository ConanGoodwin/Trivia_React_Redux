import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
function BtnRespText({ answer, index, results, indexResp,
  handleClickAnswer, isAnswer, correctClass, id }) {
=======
function BtnRespText({ answer, indexResp, index }) {
>>>>>>> f60df1c... style: retirado erros de lint
  function decodeEntity(inputStr) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = inputStr;
    return textarea.value;
  }

  return (
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
      ? (
        <div
          className="has-tooltip-arrow has-tooltip-arrow
           has-tooltip-active has-tooltip-bottom"
          data-tooltip="Resposta dada!"
        >
          { decodeEntity(answer) }
        </div>
      ) : (
        <div>
          { decodeEntity(answer) }
        </div>

>>>>>>> f60df1c... style: retirado erros de lint
      )
  );
}

BtnRespText.propTypes = {
  answer: PropTypes.string.isRequired,
<<<<<<< HEAD
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
=======
  indexResp: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
>>>>>>> f60df1c... style: retirado erros de lint
};

export default BtnRespText;
