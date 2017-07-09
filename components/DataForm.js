import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'

const DataForm = props => {
  return (
    <View style={styles.container}>
      <FormLabel>URL</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>Null Hypothesis</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <FormLabel>Alternative Hypothesis</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <Button
        large
        backgroundColor='#2196F3'
        icon={{name: 'ios-flask', type: 'ionicon'}}
        title='Analyze' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
  },
});

export default DataForm;
