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

         <View style={[estilos.InputContainer, {borderColor: error ?  COLORS.red : COLORS.darkBlue }]}>
            <Icon name={iconName} style={estilos.Icon}/>
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
   
});

export default Input;