import React,{useState,useEffect} from 'react'
import {

  ScrollView,
  StyleSheet
} from 'react-native'
import {
  List,
  Text,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  CheckBox,
  Title,
  H1,
  Form,
  Item,
  Input,
  Fab,
  Subtitle,
  Container,
  Spinner
} from 'native-base'

import AsyncStorage from '@react-native-community/async-storage'
function Edit({navigation,route}) { 
  const [name, setName] = useState('');
  const [totalNoOfSason, setTotalNoOfSeason] = useState('');
  const [id, setId] = useState(null)
  const update = async()=>{
    try{
      if (!name
        ||!totalNoOfSason
        ) {
        return alert('Please add both Fields')
      }

      const seasonToUpdate={
        id,
        name,
        totalNoOfSason,
        isWatched:false
      }

      const storedValue =await AsyncStorage.getItem('@season_list')
      const prevList = await JSON.parse(storedValue)
      prevList.map((singleSeason)=>{
      if(singleSeason.id==id){
        singleSeason.name=name;
        singleSeason.totalNoOfSason=totalNoOfSason
      }
      return singleSeason

    })
      await AsyncStorage.setItem('@season_list',JSON.stringify(prevList))
      setName('')
      setTotalNoOfSeason('')
      navigation.navigate('home')
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {

      const {season}=route.params
      console.log(season);
      const {id,name,totalNoOfSason}=season
      console.log(name);
      setId(id);
      setName(name);
      setTotalNoOfSeason(totalNoOfSason)
    
  }, [])
  
  return (
    <Container style={styles.container}>
    <ScrollView contentContainerStyle={{
      flexGrow:1
    }}>
      <H1 style={styles.heading}>Edit Show </H1>
      <Form>
        <Item rounded style={styles.formItem}>
          <Input 
          placeholder="Season Name"
          style={{color:"#eee"}}
          value={name}
          onChangeText={(text)=>setName(text)}
          />
        </Item>

        <Item rounded style={styles.formItem}>
          <Input 
          placeholder="Total No of Season"
          style={{color:"#eee"}}
          value={totalNoOfSason}
          onChangeText={(text)=>setTotalNoOfSeason(text)}
          />
        </Item>
        <Button rounded block onPress={update}>
          <Text style={{color:"#eee"}}>Update</Text>
        </Button>
      </Form>
    </ScrollView>
  </Container>
  )
}

export default Edit
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});