import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Upload from '../screens/Upload';

const AppStack = createStackNavigator();

export default function App({ signOut }) {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Yavin">
        {() => <Home signOut={signOut} />}
        {/* {() => <Upload />} */}
      </AppStack.Screen>
    </AppStack.Navigator>
  );
}
