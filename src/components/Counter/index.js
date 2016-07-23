import React, { Component, PropTypes } from 'react';
import styles from './style.sass';

export default class Counter extends Component {

  componentDidMount() {
    const { increment } = this.props.actions;
    this.interval = setInterval(
      () => increment(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counterValue } = this.props;

    return (
      <header className="header">
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counterValue}</div>
      </header>
    );
  }
}

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired
}

export default Counter
