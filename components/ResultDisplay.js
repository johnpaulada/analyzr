import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultDisplay = props => {
  return (
    <View style={styles.container}>
      <Text>Conclusion</Text>
      <Text>{props.conclusion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ResultDisplay;
