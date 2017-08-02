import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import R from 'ramda';

const textToResultField = (f, i) => {
  const TEXT_STYLES = [styles.fieldTitle, styles.fieldInfo];
  const textStyle = TEXT_STYLES[i]
  return <Text style={textStyle}>{f}</Text>
}
const entriesToFields = fields => fields.map(textToResultField);
const getResultFields = R.map(entriesToFields)

const ResultDisplay = props => {
  const resultsData = Object.entries(props.conclusion);
  const resultFields = getResultFields(resultsData);
  return (
    <View style={styles.container}>
      {resultFields}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  fieldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  fieldInfo: {
    fontSize: 16,
    marginBottom: 15
  }
})

export default ResultDisplay;
