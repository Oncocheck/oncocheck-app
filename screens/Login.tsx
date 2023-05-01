import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import appLogo from '../assets/logo-oncocheck.png'

import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);

  const goToHome = () => {
    if(usuario === 'admin' && senha === 'admin'){
      navigation.navigate('Admin');
    }else {
      navigation.navigate('MainPage');
    }
  }

  return (
    <LinearGradient colors={['#69FFD2', '#3E4EDD']} style={styles.pageContainer}>
      <Animated.View
        style={{
          ...styles.logoContainer,
        }}
      >
        <Image source={appLogo} />
      </Animated.View>

      <Animated.View style={{ ...styles.contentContainer }} >
        <Text style={styles.loginTitle}>Faça o Login</Text>

        <View style={styles.loginForm}>
          <View style={styles.formItem}>
            <Text style={styles.inputLabel}>Login</Text>
            <TextInput style={styles.input} placeholder='Exemplo123@' onChangeText={e => setUsuario(e)}/>
          </View>
          <View style={styles.formItem}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry placeholder='********' onChangeText={e => setSenha(e)}/>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => goToHome()}>
            <Text style={styles.buttonLabel}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword} onPress={() => { }}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>

    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 28
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingHorizontal: 8,
    borderWidth: 0,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32
  },
  loginTitle: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700'
  },
  loginForm: {
    marginTop: 16,
    marginBottom: 24,
    padding: 8
  },
  formItem: {
    marginVertical: 8
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 4,
    color: '#5162fa'
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderWidth: 0,
    borderRadius: 8
  },
  button: {
    padding: 12,
    paddingHorizontal: 14,
    marginTop: 24,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#5162fa',
  },
  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  forgotPassword: {
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#ddd',
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 12
  }
});

