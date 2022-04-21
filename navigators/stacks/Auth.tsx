import React from 'react';


import {createStackNavigator} from '@react-navigation/stack';
import Sign_in from './screens/auth/Sign_in';
import Login from './screens/auth/Login';

// import {RootStackParamList} from './screens/RootStackParams';
// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createStackNavigator();


export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Kassa TZ" component={Login} />
      </Stack.Navigator>
  );
}
