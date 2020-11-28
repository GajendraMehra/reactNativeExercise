import React from 'react'
import {
  Text,
  StyleSheet,
  View

} from 'react-native'
const App =()=>{
  return (
    <>
    <View style={
    [ styles.container,
    { backgroundColor:"#123abc"}
    ]
    }>
      <Text>First change here </Text>
    </View>
    </>
  );
}
export default App;

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // color:'#ffffff'
   
  }
})