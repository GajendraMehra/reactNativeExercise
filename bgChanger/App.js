import React,{useState} from 'react'
const chalk = require('chalk');
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity

} from 'react-native'
const App =()=>{

 
  const [randomColor,setRandomColor]=useState('rgb(32,0,126)');
  const changeBG=()=>{
    console.log(chalk.green('Hello world!'));
    let color = `rgb(
      ${  Math.floor(Math.random()*256)},
      ${  Math.floor(Math.random()*256)},
      ${  Math.floor(Math.random()*256)}
      )`
      setRandomColor(color)

  }
  return (
    <>
    <View style={
    [ styles.container,
    { backgroundColor:randomColor}
    ]
    }>
      <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>Tap Me</Text>


      </TouchableOpacity>
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
   
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2cd9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#ffffff",
    borderRadius:15,
    textTransform:"uppercase"
  }
})