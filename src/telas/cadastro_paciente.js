import React, { useState } from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";


import Input from "../componentes/input";
import Button from "../componentes/button";
import COLORS from "../const/colors";

const Titulo = "Medmoria"

const CadastroPaciente = () => {

  const [inputs, setInputs] = React.useState({
    nomePaciente:'',
    telefonePaciente:'',
    celularPaciente:'',
    emailPaciente:''
  });

  const handlerOnChange = (text, input)=>{
    setInputs((prevState)=>(
      console.log(prevState),

      {...prevState, [input]:text}
    ))
  }

  const [errors, setErrors] = React.useState({});

  const handlerErrors = (errorMesage, input)=>{
    setErrors((prevState)=>({...prevState, [input]:errorMesage}));
  }

  const validate = ()=>{

    let validate = true;

    if (!inputs.nomePaciente) {
      validate = false;
      handlerErrors('Informe o nome do paciente.', 'nomePaciente');
    }

    if (!inputs.telefonePaciente) {
      validate = false;
      handlerErrors('Informe o telefone do paciente.', 'telefonePaciente');
    }

    if (!inputs.celularPaciente) {
      validate = false;
      handlerErrors('Informe o celular do paciente.', 'celularPaciente');
    }

    if (!inputs.emailPaciente) {
      validate = false;
      handlerErrors('Informe o email do paciente.', 'emailPaciente');
    }

    if(validate){
      cadastrar();
      console.log('CADASTROU');
    }

    console.log(errors);

    const cadastrar = ()=>{

      try{
        console.log('Cadastrou');
      }catch(error){}

  }

  }

  return(
    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>
        <View style={estilos.viewForm}>
          <Text style={estilos.title}>{Titulo}</Text>
          <Image style={estilos.img} source={require('../assets/logo.png')}/>
          <Input  
            placeholder="Nome Paciente:*" 
            iconName="account" 
            error={errors.nomePaciente}
            onFocus={()=>{handlerErrors(null, 'nomePaciente')}}
            onChangeText = {(text)=>handlerOnChange(text, 'nomePaciente')} />

          <Input 
            placeholder="Telefone Paciente:*" 
            iconName="phone" 
            error={errors.telefonePaciente}
            onFocus={()=>{handlerErrors(null, 'telefonePaciente')}}
            onChangeText = {(text)=>handlerOnChange(text, 'telefonePaciente')}/>

          <Input 
            placeholder="Celular Paciente:*" 
            iconName="cellphone"
            error={errors.celularPaciente}
            onFocus={()=>{handlerErrors(null, 'celularPaciente')}}
            onChangeText = {(text)=>handlerOnChange(text, 'celularPaciente')}/>

          <Input 
            placeholder="Email Paciente:*" 
            iconName="email"
            error={errors.emailPaciente}
            onFocus={()=>{handlerErrors(null, 'emailPaciente')}}
            onChangeText = {(text)=>handlerOnChange(text, 'emailPaciente')}/>

          <Input placeholder="Nome Responsável:" iconName="account-multiple"/>

          <Input placeholder="Telefone Responsável:" iconName="phone-plus"/>
          
          <Button 
          title={"Enviar Cadastro"} 
          onPress={validate}/>

        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

 const estilos = StyleSheet.create({
    viewForm:{
      flex:1,
      marginTop:2,
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
      color:COLORS.light_blue,
      fontSize:25,
      alignItems:"center",
      justifyContent:"center"
    },
    img:{
      height:50,
      width:50,
      color:COLORS.light_blue
    }
 });
 
 export default CadastroPaciente;