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
  Fab,
  Subtitle,
  Container,
  Spinner
} from 'native-base'

import AsyncStorage from '@react-native-community/async-storage'
import {useIsFocused} from '@react-navigation/native'

function Home({navigation,route}) {
  const [listOfSeason, setListOfSeason] = useState([])
  const [loading, setLoading] = useState(false)
  const isFocused=useIsFocused()
    const getList = async()=>{
  setLoading(true)
  const storedValue=await AsyncStorage.getItem('@season_list')
  if (!storedValue) {
    setListOfSeason([])
    
  }
  const list = JSON.parse(storedValue)
  console.log(list);
  setListOfSeason(list)
  setLoading(false)
  }

  const deleteSeason = async(id)=>{
    const newList = await listOfSeason.filter((list)=>list.id!==id)
    await AsyncStorage.setItem('@season_list',JSON.stringify(newList))
    setListOfSeason(newList)

  }
  const markComplete= async(id)=>{
    const newArr=listOfSeason.map((list)=>{
      if (list.id==id) {
        list.isWatched=true
      }
      return list
    })
    await AsyncStorage.setItem('@season_list',JSON.stringify(newArr))
    setListOfSeason(newArr)
    

  }
  useEffect(()=>{
  getList()
  },[isFocused])
  if (loading) {
    return (
      <Container style={styles.container}>
        <Spinner color="#00b7c2"></Spinner>
      </Container>
    )
  }
  return (
   <ScrollView contentContainerStyle={styles.container}>
    {listOfSeason.length==0?(
      <Container style={styles.container}>
        <H1  style={styles.heading}>
          Watch List is Empty. Please add a season
        </H1>
      </Container>

    ):(
      <>
      <H1   style={styles.heading}>Next Series to watch</H1>
      <List>
       {
         listOfSeason.map((season)=>(
          <ListItem key={season.id} style={styles.listItem} noBorder>
          <Left>
            <Button style={styles.actionButton}
            danger
            onPress={
              ()=>deleteSeason(season.id)
            }
            >
              <Icon name="trash" active/>
            </Button>
            <Button style={styles.actionButton}
            onPress={
              ()=>{
                navigation.navigate('edit',{season})
              }
            }
            >
              <Icon name="edit" type="Feather" active />
            </Button>
          </Left>
          <Body>
            <Title> {season.name}</Title>
            <Text style={styles.totalNoOfSeasons} note>{season.totalNoOfSeasons} seasons to watch</Text>
          </Body>
          <Right>
            <CheckBox checked={season.isWatched} onPress={()=>markComplete(season.id)}/>
          </Right>
        </ListItem>
         ))
       }
      </List>
      </>
    )}
     <Fab
     style={{
       backgroundColor:"#123abc",
     }}
     position="bottomRight"
     onPress={()=>navigation.navigate('add')}
     >
    <Icon name="add"/>
     </Fab> 
   </ScrollView>
  )
}

export default Home
const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});