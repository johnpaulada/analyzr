import React from 'react';
import ResultDisplay from '../components/ResultDisplay.js';

export default class ResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Results'
  };

  render() {
    return <ResultDisplay {...this.props.navigation.state.params} />;
  }
}
