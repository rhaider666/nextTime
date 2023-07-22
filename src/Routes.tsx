import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calls from './Calls';
import Temp from './Temp';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <Tab.Navigator initialRouteName='Calls' screenOptions={{headerShown:false}}>
      
      <Tab.Screen 
        name="Portfolio" 
        component={Temp} 
        options={{
          tabBarIcon:({color})=>(<Icon name='account-supervisor' color={color} size={25}/>)
        }}
      />
      <Tab.Screen 
        name="Signals" 
        component={Temp} 
        options={{
          tabBarIcon:({color})=>(<Icon name='signal' color={color} size={25}/>)
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Temp} 
        options={{
          tabBarIcon:({color})=>(<Icon name='home' color={color} size={25}/>)
        }}
      />
      <Tab.Screen 
        name="Courses" 
        component={Temp} 
        options={{
          tabBarIcon:({color})=>(<Icon name='file-document' color={color} size={25}/>)
        }}
      />
      <Tab.Screen 
        name="Calls" 
        component={Calls} 
        options={{
          tabBarIcon:({color})=>(<Icon name='voicemail' color={color} size={25}/>)
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes

const styles = StyleSheet.create({})