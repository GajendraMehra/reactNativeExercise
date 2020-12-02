import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
const Icons = ({name})=>{
    switch (name) {
        case 'circle':
            return (
                <Icon name="circle" size={45} color="#f4c724"/>
            )
        break;   
        case 'cross':
            return (
                <Icon name="times" size={45} color="#10A881"/>
            )
        break;
    
        default:
            return (
                <Icon name="pencil" size={45} color="#303030"/>
            )
        break;
    }
  
}
export default  Icons;