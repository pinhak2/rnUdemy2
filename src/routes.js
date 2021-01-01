import Main from './pages/main';
import {createStackNavigator} from 'react-navigation-stack';

const Route = createStackNavigator(
  {
    Home: Main,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#048538b3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
export default Route;
