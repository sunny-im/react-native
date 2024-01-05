import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Detail from './components/Detail';


export default App = () => {
  //=========================================================
  const Stack = createStackNavigator();
  //=========================================================
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'List Detail'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}