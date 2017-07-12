import { TabNavigator } from 'react-navigation'
import AnalyzeLayout from './AnalyzeLayout'

const AppLayout = TabNavigator({
  Analyze: { screen: AnalyzeLayout }
}, {
  tabBarOptions: { activeTintColor: '#e91e63' }
})

export default AppLayout
