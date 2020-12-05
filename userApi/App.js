/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Axios from 'axios'
import {
  Button
} from 'native-base'
import User from './components/User'
const URL = 'https://randomuser.me/api/'
const App =()=>{

  const [details, setDetails] = useState(null)
  const fetchDetails=async()=>{
    try{

      const {
        data
      } =await Axios.get(URL)
      console.log(data);
      console.log(data.results[0]);
     const details=data.results[0];
     setDetails(details)
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchDetails()
  },[])

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
    <View>
    <User details={details} ></User>
     <View style ={}>
     <Button  style={styles.button} 
      primary
      onPress={()=>{
        fetchDetails()
      }}>
        <Text >New User</Text>
      </Button>
     </View>
     
    </View>
  </View>

  )
}
export default App;


const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignContent:"center",
    alignItems: 'center',
    backgroundColor:"#222831"
  },
  button:{
alignContent:"center"
  }
})