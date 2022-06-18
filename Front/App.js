import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import ContextProvider from './src/Context/Contextt';


export default function App() {
  return (
  
    <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </ContextProvider>
  
  )
}