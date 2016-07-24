import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';

class CounterContainer extends Component {
  render() {
    const { counter: { counterValue }, dispatch } = this.props;
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <h1>Counter</h1>
        <Counter counterValue={counterValue} actions={actions} />
      </div>
    );
  }
}

CounterContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.object.isRequired,
};


export default connect(state => ({ counter: state.counter }))(CounterContainer);
