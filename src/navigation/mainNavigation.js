import React from 'react';
import colors from '../styles/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/home';
import screens from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={screens.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
