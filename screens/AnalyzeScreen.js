import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisList from '../components/AnalysisList';

export default class AnalyzeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.testList = [{name: "Dependent t-test", onSelect: () => {}}];
  }

  static navigationOptions = {
    tabBarLabel: 'Analyze',
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
