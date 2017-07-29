import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'

const DataForm = props => {
  return (
    <View style={styles.container}>
      <FormLabel>URL</FormLabel>
      <FormInput onChangeText={props.setUrl} />
      <FormLabel>Null Hypothesis</FormLabel>
      <FormInput onChangeText={props.setNullHypothesis} />
      <FormLabel>Alternative Hypothesis</FormLabel>
      <FormInput onChangeText={props.setAlternativeHypothesis} />
      <Button
        large
        backgroundColor='#2196F3'
        icon={{name: 'ios-flask', type: 'ionicon'}}
        buttonStyle={{marginTop: 10}}
        title='Analyze'
        onPress={props.onPressAnalyze} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center'
  }
})

export default DataForm
