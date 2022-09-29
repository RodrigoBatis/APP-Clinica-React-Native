import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../const/colors"

const Input = ({label, iconName, error, onFocus=()=>{}, ...props}) => {
   
   return (

      <View style ={estilos.formContainer}>
         <Text style ={estilos.inputLabel}>
            {label}
         </Text>

         <View style={[estilos.inputContainer, {borderColor: error ?  COLORS.red : COLORS.dark_blue }]}>
            <Icon name={iconName} style={estilos.icon}/>
            <TextInput
               style={estilos.TextInput}
               autoCorrect={false}
               onFocus={()=>{onFocus()}}
               {...props}

            />
         </View>
         <Text style={estilos.textError}>{error}</Text>

      </View>

   )

}

const estilos = StyleSheet.create({
   
   formContainer:{
   },
   inputLabel:{
      // marginVertical: 15,
      fontSize: 15,
      color: COLORS.black,
   },
   inputContainer:{
      height: 55,
      width:300,
      backgroundColor: COLORS.light,
      flexDirection: 'row',
      borderWidth:1,
      paddingHorizontal:15,
      alignContent:'center',
      borderRadius:50,
   },
   TextInput: {
      flex: 1,
      color: COLORS.dark_blue,
    },
    icon: {
      color: COLORS.dark_blue,
      marginRight: 10,
      fontSize: 22,
      marginTop:15
    },
    textError:{
      color:COLORS.red,
      fontSize:20

    }

});

export default Input;