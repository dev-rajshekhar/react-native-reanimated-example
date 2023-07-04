/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Home from './src/Home';
import ImageGallery from './src/animations/ImageGallery';
import ImageDetails from './src/animations/ImageDetails';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true, headerBackTitleVisible: false}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen
        name="shared_element"
        component={ImageGallery}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="ImageDetails"
        component={ImageDetails}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
