import React from 'react'
import { StackNavigator } from 'react-navigation'
import AnalyzeScreen from '../screens/AnalyzeScreen'
import DataScreen from '../screens/DataScreen'
import ResultScreen from '../screens/ResultScreen'
import { Icon } from 'react-native-elements'

const AnalyzeLayout = StackNavigator({
  AnalyzeScreen: { screen: AnalyzeScreen },
  DataScreen: { screen: DataScreen },
  ResultScreen: { screen: ResultScreen }
})

AnalyzeLayout.navigationOptions = {
  tabBarLabel: 'Analyze',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='ios-flask'
      type='ionicon'
      color={tintColor}
    />
  )
}

export default AnalyzeLayout
