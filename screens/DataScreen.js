import React from 'react';
import { StyleSheet, View } from 'react-native';
import DataForm from '../components/DataForm';

export default class DataScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ''
    }
  }

  setUrl = url => {
    this.setState({url});
  }

  onPressAnalyze = () => {
    const analyze = this.props.navigation.state.params.analyze;
    analyze(this.state.url);
  }

  static navigationOptions = {
    title: 'Add Data'
  };

  render() {
    return (<DataForm
      setUrl={this.setUrl}
      onPressAnalyze={this.onPressAnalyze}
    />);
  }
}
