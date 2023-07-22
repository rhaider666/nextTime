import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/SignUp';
import Routes from './src/Routes';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp' screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:'#1d1d1d'},
        headerTintColor:'white',
       headerBackVisible:false
      }}>
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{headerTitle:'Sign Up'}}
        />
        <Stack.Screen 
          name="Routes" 
          component={Routes} 
          options={{headerTitle:'Video Calls'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})