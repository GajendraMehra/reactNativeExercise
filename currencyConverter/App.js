import React ,{useState} from 'react'
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
StyleSheet,
TouchableOpacity,
TextInput
} from 'react-native'
import Snackbar from 'react-native-snackbar';
const currencyPerRupee={
  "DOLAR":0.014,
  "EURO":0.012,
  "EURO":0.1,
  "POUND":0.1,
  "RUBEL":0.1,
  "AUSDOLLAR":0.1,
  "CANDOLLAR":0.1,
  "YEN":0.1,
  "DINAR":0.1,
  "BITCON":0.1,

}
const App=()=>{
  const [inputValue,setInputValue]=useState(0)
  const [resultValue,setResultValue]=useState(0)
  const buttonPressed=(cur)=>{
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please Enter Number',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'Close',
          textColor: 'red',
          onPress: () => { /* Do something. */ },
        },
      });
    }
    let result = parseFloat(inputValue)*currencyPerRupee[cur]
    setResultValue(result.toFixed(2))
  }
  return (
    <>
    <ScrollView  backgroundColor="#123abc" keyboardDismissMode="interactive"
    keyboardShouldPersistTaps="always"
    contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
       <View style={styles.inputContainer}>
         <TextInput
         style={styles.input}
         keyboardType="numeric"
         placeholder="Enter Value"
         placeholderTextColor="#fff"
         value={inputValue}
         onChangeText={(inputValue)=>setInputValue(inputValue)}
         ></TextInput>
       </View>

      <View style={styles.convertButtonContainer}>
        {Object.keys(currencyPerRupee).map((cur)=>{
          return (
            <TouchableOpacity  style={styles.convertButton} onPress={()=>buttonPressed(cur)}>
              <Text style={styles.convertButtonText}>
                {cur}
              </Text>
            </TouchableOpacity>
          )
        })}

      </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#123abc"
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center"
  },
  resultValue:{
    fontSize:30,
    color:"#fff",
    fontWeight:"bold"
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe1fa"
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#fff",
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10
  }, 
   convertButton:{
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:"33.3%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    backgroundColor:"#0f4c75",
    marginTop:10
  },
  convertButtonText:{
    color:"#fff"
  }
})