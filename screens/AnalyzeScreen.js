import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisList from '../components/AnalysisList';
import Papa from 'papaparse';

require('statestes');

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

  getAnalyze = type => {
    const analyzeMethods = {
      'dependent-t-test': result => {
        const isSignificant = statestes.pairedTTest([result.data[0], result.data[1]]);
        return isSignificant;
      },
      'independent-t-test': result => {
        const isSignificant = statestes.independentTTest([result.data[0], result.data[1]]);
        return isSignificant;
      }
    }

    const analyze = url => {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          const result = Papa.parse("1,1,1\n2,6,9");
          analyzeMethods[type](result);
        });
    }

    return analyze;
  };

  onTestSelect = (type, navigate) => {
    return () => {
      navigate("DataScreen", { analyze: this.getAnalyze(type) } );
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
