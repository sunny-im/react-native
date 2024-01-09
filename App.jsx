import React, {useEffect, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Detail from './components/Detail';
import Menu from './components/Menu';

const App = () => {
  //=========================================================
  const Stack = createStackNavigator();
  //=========================================================
  return (
    <NavigationContainer>
      <View style={{flex:1}}>
        <View style={{flex:100}}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={Detail} options={{ title: 'List Detail'}}/>
          </Stack.Navigator>
        </View>
        <Menu style={{}} />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});

export default App;

