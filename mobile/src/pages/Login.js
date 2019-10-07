import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Image } from 'react-native';

// import api from '../services/api';

import logo from '../assets/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');
  
  async function handleSubmit() {
    console.log(email);
    console.log(techs);
  }

  return (<KeyboardAvoidingView enable={Platform.OS === 'ios'} behavior='padding' style={styles.container}>
    <Image source={logo} />

    <View style={styles.form}> 
      <Text style={styles.label}>SEU E-MAIL *</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu E-MAIL"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>TECNOLOGIAS *</Text>
      <TextInput
        style={styles.input}
        placeholder="Tecnologias de interesse"
        placeholderTextColor="#aaa"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs}
        onChangeText={setTechs}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Econtrar spots</Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>
  )}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363636',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#ddd',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff',
    height: 44,
    marginBottom: 20,
    borderRadius: 15,
  },

  button: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#f55555',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});