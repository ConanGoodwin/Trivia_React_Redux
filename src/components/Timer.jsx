import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
<<<<<<< HEAD
<<<<<<< HEAD
import './style/timer.css';

const ONE_SECOND = 1000;
const CRITICAL_TIME = 10;
<<<<<<< HEAD
=======
>>>>>>> e13e208... criando arquivo timer
=======
import './style/timer.css';
>>>>>>> f0f1f4e... add fonts

const ONE_SECOND = 1000;
=======
>>>>>>> 6380a25... add cor critica a tempo abaixo de 10s

class Timer extends React.Component {
  constructor() {
    super();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 71ed467... timer
    this.state = {
      timerCount: 30,
    };
  }

  componentDidMount() {
    this.setTimeCount = setInterval(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0ce4291... esquema do setTime
      this.setState(
        (previewState) => ({ timerCount: previewState.timerCount - 1 }),
        () => {
          const { timerCount } = this.state;
          const { setTime } = this.props;
          setTime(timerCount);
        },
      );
<<<<<<< HEAD
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.setTimeCount);
  }

  timeIsEnd = () => {
    const { handleClickAnswer } = this.props;
    handleClickAnswer({ target: { name: 'Timer' } });
  };

  render() {
    const { timerCount } = this.state;
    if (timerCount === 0) { this.timeIsEnd(); }
    return (
      <h1
        data-testid="timer"
        className={ timerCount > CRITICAL_TIME ? 'time' : 'time time_critical' }
      >
        {timerCount}
      </h1>
    );
  }
}

Timer.propTypes = {
  handleClickAnswer: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default connect()(Timer);
=======
=======
      this.setState((previewState) => ({ timerCount: previewState.timerCount - 1 }));
=======
>>>>>>> 0ce4291... esquema do setTime
    }, ONE_SECOND);
>>>>>>> 71ed467... timer
  }

  componentWillUnmount() {
    clearInterval(this.setTimeCount);
  }

  timeIsEnd = () => {
    const { handleClickAnswer } = this.props;
    handleClickAnswer({ target: { name: 'Timer' } });
  };

  render() {
    const { timerCount } = this.state;
    if (timerCount === 0) { this.timeIsEnd(); }
    return (
      <h1
        data-testid="timer"
        className={ timerCount > CRITICAL_TIME ? 'time' : 'time time_critical' }
      >
        {timerCount}
      </h1>
    );
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps)(Timer);
>>>>>>> e13e208... criando arquivo timer
=======
Timer.propTypes = {
  handleClickAnswer: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default connect()(Timer);
>>>>>>> 71ed467... timer
