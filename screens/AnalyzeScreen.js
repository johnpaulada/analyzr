import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisList from '../components/AnalysisList';

export default class AnalyzeScreen extends React.Component {
  constructor(props) {
    super(props);

    const { navigate } = this.props.navigation;

    this.testList = [
      {
        id: 0,
        name: "Dependent t-test",
        description: "t-test for dependent data sets.",
        onSelect: this.onTestSelect('dependent-t-test', navigate)
      },
      {
        id: 1,
        name: "Independent t-test",
        description: "t-test for independent data sets.",
        onSelect: this.onTestSelect('independent-t-test', navigate)
      }
    ];
  }

  onTestSelect = (type, navigate) => {
    return () => {
      navigate("DataScreen", { analyze: () => {} });
    }
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
