import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Pressable
} from 'react-native'
import Sound from 'react-native-sound'    

const soundList=[
require('./assets/one.wav'),
require('./assets/two.wav'),
require('./assets/three.wav'),
require('./assets/four.wav'),
require('./assets/five.wav'),
require('./assets/six.wav'),
require('./assets/seven.wav'),
require('./assets/eight.wav'),
require('./assets/nine.wav'),
require('./assets/ten.wav'),
]
const App =  ()=>{
  const playSound =(sound)=>{
    const soundVar=new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
  })
  console.log("Alert");
  setTimeout(()=>{
    soundVar.play()
  },500)
    soundVar.release()
}
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")}></Image>
      <View style={styles.gridContainer} >
    {soundList.map((sound)=>{
      return (
        <Pressable  style={styles.box} key={sound} onPress={()=>{
          playSound(sound)
        }}>
          <Text style={styles.text}>
            {sound}
          </Text>
        </Pressable>
      )
    })}
      </View>

    </ScrollView>
    )
}
export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  logo:{
    alignSelf:"center",
    marginTop:15,
  },
  gridContainer:{
    flex:1,
    margin:5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
  },
  box:{
    height:75,
    alignItems:"center",
    justifyContent:"center",
    width:"45%",
    marginVertical:8,
    backgroundColor:"#0f4c75",
    borderRadius:5,
    shadowColor:"#393e46",
    elevation:5,
    shadowRadius:6
  },
  text:{
    fontSize:50,
    color:"#ff4301"
  }
  
})