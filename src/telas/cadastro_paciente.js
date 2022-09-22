import React, { useState } from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";

import Input from "../componentes/input";
import Button from "../componentes/button";
import COLORS from "../const/colors";

const CadastroPaciente = () => 
{
   const nome_paciente = 'Medmoria'

   const [inputs, setInputs] = React.useState({
      
      nome_paciente: '',
      telefone_paciente: '',
      celular_paciente: '',
      email_paciente: '',
      nome_responsavel: '',
      telefone_responsavel: '',
    });

    return(

      <ScrollView style={estilos.Scroll}>

          <Text style={estilos.TextTitle}>{nome_paciente}</Text>

          <View style={estilos.ViewForm}>
  
            <Input  label= "Nome:" 
                    iconName="book-outline"
                    error={errors.nome_paciente}

                    onFocus={()=>{handlerErrors(null, 'nome_paciente')}}

                    onChangeText={(text) => handlerOnChange(text, 'nome_paciente')}/>

            <Input  label= "Telefone:" 
                    iconName="card-text-outline"
                    error={errors.telefone_paciente}

                    onFocus={()=>{handlerErrors(null, 'telefone_paciente')}}

                    onChangeText={(text) => handlerOnChange(text, 'telefone_paciente')}/>

            <Input  label= "Capa:" 
                    iconName="image-outline"
                    error={errors.capa}

                    onFocus={()=>{handlerErrors(null, 'capa')}}

                    onChangeText={(text) => handlerOnChange(text, 'capa')}/>
                    

            <Button title= "Cadastrar" 
                    onPress={validate}/>

          </View>
        </ScrollView>

    );
}

const estilos = StyleSheet.create({

   Safe:{
     flex:1,
     backgroundColor:COLORS.light
   },
   Scroll:{
     paddingTop:50,
     paddingHorizontal:20,
   },
   TextTitle:{
     color:COLORS.black,
     fontSize:25,
     fontWeight:"bold",
     textAlign:"center"
   },
   ViewForm:{
     marginVertical:20,
   }
 })
 
 
 export default Cadastro;