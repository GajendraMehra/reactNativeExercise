import React,{useState} from 'react'
import {
  Text
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// bring in all screens 
import Home from './screens/Home'
import Edit from './screens/Edit'
import Add from './screens/Add'

const Stack = createStackNavigator();
function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="add">
       <Stack.Screen name = "home"
       component={Home}
       options={{
         headerStyle:{
           backgroundColor:"#0f4c75"
         },
         title:"Netflix App",
         headerTitleStyle:{
           textAlign:"center",
           color:"#00b7c2"
           
         }
       }}
       >

       </Stack.Screen>

       <Stack.Screen name = "add"
       component={Add}
       options={{
         headerStyle:{
           backgroundColor:"#0f4c75"
         },
         title:"Netflix App add",
         headerTitleStyle:{
           textAlign:"center",
           color:"#00b7c2"
           
         }
       }}
       >

       </Stack.Screen>

       <Stack.Screen name = "edit"
       component={Edit}
       options={{
         headerStyle:{
           backgroundColor:"#0f4c75"
         },
      
         title:"Netflix App Editt",
         headerTitleStyle:{
           textAlign:"center",
           color:"#00b7c2"
           
         }
       }}
       >

       </Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App
