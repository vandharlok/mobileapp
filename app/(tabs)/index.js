import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();


  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('E-mail e/ou senha inválidos.');
    } else {
      setErrorMessage('erro');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Satisfying.you</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Sua senha"
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => router.push('/(tabs)/newAccount')}
      >
        <Text style={styles.createAccountText}>Criar minha conta</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.resetPassword}
       onPress={() => router.push('/(tabs)/forgetPassword')}>
        <Text style={styles.resetPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
      
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B286D',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginBottom: 16,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#5AC8FA',
    padding: 2,
    marginTop:40,
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 8,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
  },
  resetPassword: {
    backgroundColor: 'gray',
    padding: 2,
    color: 'white',
    borderRadius: 2,
    alignItems: 'center',




  }
});
