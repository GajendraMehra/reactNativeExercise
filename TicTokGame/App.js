import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  Button,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Title,

} from 'native-base'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'
const itemArray= new Array(9).fill('empty');
const App =()=>{
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState('')
  const changeItem=(itemNumber)=>{
    if (winMessage) {
      return Snackbar.show({
        text:winMessage,
        backgroundColor:"#000",
        textColor:"#fff",

      })
    }
    if (itemArray[itemNumber]==="empty") {
      itemArray[itemNumber]=isCross?'cross':'circle';
      checkIsWinner()
      setIsCross(!isCross)
    }else{
      return Snackbar.show({
        text: 'Position is already filled',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'UNDO',
          textColor: 'green',
          onPress: () => { /* Do something. */ },
        },
      });
    }
  }

  const reloadGame=()=>{
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty',0,9)
  }

  const checkIsWinner=()=>{
    // Row check
  if (itemArray[0]===itemArray[1]
    &&itemArray[1]===itemArray[2]
    &&itemArray[0]!=="empty"
    ) {
      setWinMessage(`${itemArray[0]} won`)
      return
    }


  if (itemArray[3]===itemArray[4]
    &&itemArray[4]===itemArray[5]
    &&itemArray[3]!=="empty"
    ) {
      setWinMessage(`${itemArray[3]} won`)
      return
    }
  if (itemArray[6]===itemArray[7]
    &&itemArray[7]===itemArray[8]
    &&itemArray[6]!=="empty"
    ) {
      setWinMessage(`${itemArray[6]} won`)
      return
    }

    // column check

    if (itemArray[0]===itemArray[3]
      &&itemArray[3]===itemArray[6]
      &&itemArray[0]!=="empty"
      ) {
        setWinMessage(`${itemArray[6]} won`)
        return
      } 
      if (itemArray[1]===itemArray[4]
      &&itemArray[4]===itemArray[7]
      &&itemArray[1]!=="empty"
      ) {
        setWinMessage(`${itemArray[4]} won`)
        return
      } 
      if (itemArray[2]===itemArray[5]
      &&itemArray[5]===itemArray[8]
      &&itemArray[2]!=="empty"
      ) {
        setWinMessage(`${itemArray[2]} won`)
        return
      }

      // cross echekc
      if (itemArray[0]===itemArray[4]
        &&itemArray[4]===itemArray[8]
        &&itemArray[0]!=="empty"
        ) {
          setWinMessage(`${itemArray[0]} won`)
          return
        } 
         if (itemArray[2]===itemArray[4]
        &&itemArray[4]===itemArray[6]
        &&itemArray[2]!=="empty"
        ) {
          setWinMessage(`${itemArray[2]} won`)
          return
        }

        if (!itemArray.find(element => element =='empty')) {
          setWinMessage(`Game Draw`)
        }
  }

  
  
  
  return (
    <Container style={{
      backgroundColor:"#333945",
      padding:5
    }}>
      <Header>
        <Body>
          <Title>
            TicTacToe
          </Title>
        </Body>
      </Header>
      <Content>
        <View style={style.grid}>
         {
           itemArray.map((item,index)=>(
             <TouchableOpacity style={style.box}
             key={index}
             onPress={
               ()=>changeItem(index)
             }
             >
               <Card style={style.card}>
                 <Icons name = {item}></Icons>
               </Card>
               

             </TouchableOpacity>
           ))
         }
        </View>

        {winMessage?(
          <View>
            <H1 style={style.message}>{winMessage}</H1>
            <Button
            onPress={reloadGame}
            primary
            block
            rounded
            >
              <Text>Reload Game</Text>
            </Button>
          </View>
        ):(
          <View>
            <H3 style={style.message}>
              {isCross?"Cross":"Circle"} turns
            </H3>
          </View>
        )}

      </Content>
    </Container>
  )
}

export default App;
 const style=StyleSheet.create({
   grid:{
     flex:1,
     flexDirection:"row",
     flexWrap:"wrap",
     marginTop:20
   },
   box:{
     width:"33.3%",
     marginBottom:6,

   },
   card:{
     height:120,
     justifyContent:"center",
     alignItems:"center"
   },
   message:{
     textAlign:"center",
     textTransform:"uppercase",
     color:"#fff",
     marginTop:20,
     margin:10,
     backgroundColor:"#4652b3",
     paddingVertical:10,
   }
 })