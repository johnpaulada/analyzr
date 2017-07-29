import React from 'react';
import { StyleSheet, View } from 'react-native';
import DataForm from '../components/DataForm';

export default class DataScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      nullHypothesis: '',
      alternativeHypothesis: ''
    }
  }

  setUrl = url => {
    this.setState({url});
  }

  setNullHypothesis = nullHypothesis => {
    this.setState({nullHypothesis});
  }

  setAlternativeHypothesis = alternativeHypothesis => {
    this.setState({alternativeHypothesis});
  }

  onPressAnalyze = () => {
    const { url, nullHypothesis, alternativeHypothesis } = this.state;
    const analyze = this.props.navigation.state.params.analyze;
    analyze(url, nullHypothesis, alternativeHypothesis);
  }

  static navigationOptions = {
    title: 'Add Data'
  };

  render() {
    return (<DataForm
      setUrl={this.setUrl}
      setNullHypothesis={this.setNullHypothesis}
      setAlternativeHypothesis={this.setAlternativeHypothesis}
      onPressAnalyze={this.onPressAnalyze}
    />);
  }
}
