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

  static navigationOptions = {
    title: 'Add Data'
  };

  render() {
    return (<DataForm />);
  }
}
