import React from 'react'
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Profile, Search} from "../index"
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

const screenOptions ={
    tabBarShowLabel: false,
    tabBarHideKeyboard: true,
    headerShown: false,
    tabBarStyle:{
        position: "absolute",
        bottom:0,
        left:0,
        right:0,
        elevation:0,
        height:60,
        // padding: 100,
        backgroundColor:"#343",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:({focused})=>{
                return <Icon name={focused?"home" : "home"} color={focused?"#FFD700":"#fff"} size={24}/>
                }
            }} />
        <Tab.Screen name='Search' component={Search} options={{
            tabBarIcon: ({focused}) => <Icon name="search" color={focused?"#FFD700":"#fff"}  size={24}/>}}/>
        <Tab.Screen name='Profile' component={Profile}  options={{
            tabBarIcon: ({focused}) => <Icon name="user" color={focused?"#FFD700":"#fff"}  size={24}/>}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

