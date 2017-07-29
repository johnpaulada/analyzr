// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisList from '../components/AnalysisList';
import Papa from 'papaparse';

const R = require('ramda');
require('statestes');

const getData = R.map(R.map(parseFloat));
const originalTestBuilder = (test, result) => {
  const getResult = R.compose(test, getData)
  const testResult = getResult(result.data);
  return testResult;
}
const testBuilder = R.curry(originalTestBuilder);
const analyzeMethods = {
  'dependent-t-test': testBuilder(statestes.pairedTTest),
  'independent-t-test': testBuilder(statestes.independentTTest)
}
const analyzer = async (type, callback, url: string, nullHypothesis: string, alternativeHypothesis: string) => {
  const response = await fetch(url);
  const responseAsText = await response.text();
  // const parsed = Papa.parse("1,2,3,4,5\n1,2,3,4,5");
  const parsed = Papa.parse(responseAsText);
  const result = analyzeMethods[type](parsed);
  callback({type, result, nullHypothesis, alternativeHypothesis})
}
const getAnalyze = R.curry(analyzer);
const interpretResults = (goToResultScreen, {type, result, nullHypothesis, alternativeHypothesis}) => {
  console.log(result);
  console.log(alternativeHypothesis);
  const conclusion = result ? alternativeHypothesis : nullHypothesis;
  goToResultScreen({result, conclusion});
}
const getInterpreter = R.curry(interpretResults);

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

  goToResultScreen = params => {
    const { navigate } = this.props.navigation;
    navigate("ResultScreen", params );
  }

  onTestSelect = (type, navigate) => {
    return () => {
      navigate("DataScreen", { analyze: getAnalyze(type, getInterpreter(this.goToResultScreen)) } );
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
