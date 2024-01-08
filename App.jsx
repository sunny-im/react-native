import React, {useEffect, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Detail from './components/Detail';
import io from 'socket.io-client';
import Menu from './components/Menu';
import { Provider } from 'react-native-paper';

const App = () => {
  //=========================================================
  const Stack = createStackNavigator();
  //=========================================================
  const ws = useRef(null);
  
  const socketConfig = { path: '/socket' };
  const socket = new io('https://user.app.blitztech.kr', socketConfig);
  useEffect(() => {

    socket.connect();
 
    // An event to be fired on connection to socket
    socket.on('connect', () => {
      console.log('Wahey -> connected!');
    });
    
    // Event called when 'someEvent' it emitted by server
    socket.on('someEvent', (data) => {
        console.log('Some event was called, check out this data: ', data);
    });
    
    // Called when anything is emitted by the server
    socket.onAny((event) => {
        console.log(`${event.name} was called with data: `, event.items);
    });
    
    // Emit an event to server
    socket.emit('helloWorld', {some: 'data'});
    
    //Disconnect from server
    socket.disconnect();
    
    // ws.current = io(`https://user.app.blitztech.kr`);
    // console.log(ws.current)
    // ws.current.on('connect', () => {
    //   ws.current.emit('welcome');
    //   console.log('Connected Server');
    // });

    // ws.current.on('message', e => {
    //   console.log(route.params.user, 'message', e);
    //   serverMessagesList.push(e);
    //   setServerMessages([...serverMessagesList]);
    // });

    // ws.current.on('welcome', e => {
    //   console.log('welcome', e);
    //   serverMessagesList.push(e);
    //   setServerMessages([...serverMessagesList]);
    // });

    // ws.current.on('leave', e => {
    //   serverMessagesList.push(e);
    //   setServerMessages([...serverMessagesList]);
    // });

    // ws.current.on('error', e => {
    //   console.log(e.message);
    // });

    // ws.current.on('disconnect', e => {
    //   console.log('Disconnected. Check internet or server.');
    // });

    // return () => {
    //     ws.current.close();
    // };
  }, [])
  //=========================================================
  return (
    <NavigationContainer>
      <View style={{flex:1}}>
        <View style={{flex:8}}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={Detail} options={{ title: 'List Detail'}}/>
          </Stack.Navigator>
        </View>
        <Menu style={{position:'absolute'}} />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});

export default App;

