import React from 'react'
import {
    StyleSheet,
    Image,
} from 'react-native'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    H1
} from 'native-base'
import moment from 'moment'
function User({details}) {
    return (
        <>
            <Card style={styles.card}>
                <CardItem cardBody style={styles.CardItem} >
                    <Image
                    style={styles.image}
                    source={{
                        uri:details.picture?.large,
                        width:150,
                        height:250
                    }}
                    />
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <H1 style={styles.text}>
                        {details.name.title}
                        {details.name.first}
                        {details.name.last}
                    
                    </H1>
                </CardItem>

                <CardItem style={styles.cardItem}>
                    <H1 style={styles.text}>
                        {details.cell}
                    </H1>
                </CardItem> 
                <CardItem footer style={styles.cardItem}>
                    <H1 style={{
                        color:"#fff"
                    }}>
                        Registered at {moment(details.registered?.date).format('DD-MM-YYYY')}
                    </H1>
                </CardItem>
            </Card>
        </>
    )
}

export default User
const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
    },
  });