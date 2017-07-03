import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisList from '../components/AnalysisList';

export default class AnalyzeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.testList = [
      {
        id: 0,
        name: "Dependent t-test",
        description: "t-test for dependent data sets.",
        onSelect: () => {}
      },
      {
        id: 0,
        name: "Independent t-test",
        description: "t-test for independent data sets.",
        onSelect: () => {}
      }
    ];
  }

  static navigationOptions = {
    title: 'Analysis List',
  };

  render() {
    return (
      <View style={styles.container}>
        <AnalysisList data={this.testList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
