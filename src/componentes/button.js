import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../const/colors'


const Button = ({title, onPress=(() => {})}) =>{
   return(
      <TouchableOpacity style={estilos.button} activeOpacity={0.7} onPress={onPress}>
         <Text style={estilos.title}>{title}</Text>
      </TouchableOpacity>
   )
}

const estilos = StyleSheet.create({
   button:{
      flex:1,
      backgroundColor:COLORS.light_blue,
      justifyContent:"center",
      alignContent:"center",
      borderRadius:10,
      height:50,
      width:300,
      alignItems:'center',
      justifyContent:'center'

   },
   title:{
      color:COLORS.light,
   }
});

export default Button;