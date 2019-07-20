import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//AutLoading
import AuthLoadingScreen from '../views/AuthLoading';
//AuthenStack
import AuthStack from '../views/Authentication';
//Main Stack
import MainStack from '../views/Main';

const AppNavigation = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Auth        : AuthStack,
  Main        : MainStack
}, {
  initialRouteName: 'AuthLoading',
  headerMode      : 'none'
});

export default createAppContainer(AppNavigation)
