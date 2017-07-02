import { TabNavigator } from 'react-navigation';
import AnalyzeScreen from '../screens/AnalyzeScreen';

const AppLayout = TabNavigator({
  Analyze: { screen: AnalyzeScreen },
}, {
  tabBarOptions: { activeTintColor: '#e91e63' },
});

export default AppLayout;
