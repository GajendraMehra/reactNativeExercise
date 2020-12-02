import React , {useState} from 'react'
import {
  Text,
  TouchableOpacity,
  Button,
  View,
  StyleSheet
} from 'react-native'
import { RNCamera } from 'react-native-camera';
const PendingView=()=>{
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text style={
        {
          fontSize:30,color:"red"
        }
      }>
        Loading..
      </Text>
    </View>
  )
}
function App() {
  const [image, setImage] = useState(null)

  const takePicture=async (camera)=>{
    try{
      const options = {
        quality:0.9,
        base64:false
      }
      const data = await camera.takePictureAsync()
      console.log(data);
      setImage(data.uri)
    }catch(err){
      console.log(err);
    }
  }
  return (
  <View style={
    style.container
  }>
    {image?(
      <Text>Image is Present  </Text>
    ):(
      <Text>
       <RNCamera
       style={
         style.preview
       }
       type={
         RNCamera.Constants.Type.back
       }
       captureAudio={false}
       flashMode={
         RNCamera.Constants.FlashMode.on
       }
       androidCameraPermissionOptions={{
         title:"Permission to use camera",
         message:"longer text to use camera",
         buttonPositive:"OK",
         buttonNegative:"Cancel"
       }}
       androidRecordAudioPermissionOptions={{
        title:"Permission to use audio",
        message:"longer text to use audio",
        buttonPositive:"OK",
        buttonNegative:"Cancel"
       }}
       >
         {({camera,status})=>{

           if (status!="READY") {
             return <PendingView/>
           }
           return (
             <View
             style={{
               flex:0,
               flexDirection:'row',
               justifyContent:"center"
             }}
             >
               <TouchableOpacity
               onPress={
                 ()=>takePicture(camera)
               }
               >
                 <Text>Snap</Text>
               </TouchableOpacity>
             </View>
           )
         }}
       </RNCamera>
      </Text>
    )}
   
  </View>
  )
}

export default App
const style= StyleSheet.create({
container:{
  flex:1,
  flexDirection:"column",
  backgroundColor:"#0a79df"
},
preview:{
  flex:1,
  justifyContent:"space-around",
  alignItems:"center"
},
capture:{
  flex:0,
  backgroundColor:"orange",
  padding:20,
  alignSelf:"center"
}
})