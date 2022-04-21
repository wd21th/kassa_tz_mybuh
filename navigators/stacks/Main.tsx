import React from 'react';


import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/main/Main';
import Pdf_View from './screens/main/Pdf_View';

// import {RootStackParamList} from './screens/RootStackParams';

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createStackNavigator();


export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Main Screen" component={Main} />
        <Stack.Screen name="Pdf_View" component={Pdf_View} />
      </Stack.Navigator>
  );
}