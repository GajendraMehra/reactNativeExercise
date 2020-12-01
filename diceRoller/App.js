import React,{useState} from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable
} from 'react-native'
 import dice1 from './assets/dice1.png'
 import dice2 from './assets/dice2.png'
 import dice3 from './assets/dice3.png'
 import dice4 from './assets/dice4.png'
 import dice5 from './assets/dice5.png'
 import dice6 from './assets/dice6.png' 
const App = ()=>{
  // const uri=dice5;
  const [uri,setUri]=useState(dice2)
  const [uri2,setUri2]=useState(dice2)
  const playButtonTapped = ()=>{
    let randomNumber =Math.floor(( Math.random()*6))+1
    let randomNumber2 =Math.floor(( Math.random()*6))+1
    console.log(randomNumber);
    switch (randomNumber) {
     case 1:
       setUri(dice1)
      
       break;
     case 2:
       setUri(dice2)
       break;
     case 3:
       setUri(dice3)
       break;
     case 4:
       setUri(dice4)
       break;
    case 5:
       setUri(dice5)
       break;
    case 6:
       setUri(dice6)
       break;
   
     default:
      setUri(dice2)
       break;
   }

   switch (randomNumber2) {
    case 1:
      setUri2(dice1)
     
      break;
    case 2:
      setUri2(dice2)
      break;
    case 3:
      setUri2(dice3)
      break;
    case 4:
      setUri2(dice4)
      break;
   case 5:
      setUri2(dice5)
      break;
   case 6:
      setUri2(dice6)
      break;
  
    default:
     setUri(dice2)
      break;
  }
  }
  return (
    <>
    <View style={styles.container}>

    <Image style={styles.image} source={uri}></Image>
    <Image style={styles.image} source={uri2}></Image>
    <Pressable onPress={playButtonTapped}>
    <Text style={styles.playButton}>Play Game</Text>

    </Pressable>
    </View>
    </>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#123abc',
    alignItems:'center',
    justifyContent:'center'

  },
  playButton:{
    fontSize:20,
    marginTop:30,
    color:"#F2A365",
    paddingVertical:10,
    paddingHorizontal:40,
    borderColor:"#ffffff",
    borderRadius:8,
    borderWidth:2,
    fontWeight:"bold"
  },
  image:{
    width:150,
    height:150
  }
  
})