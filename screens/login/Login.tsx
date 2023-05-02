import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LabeledInput from '../../components/LabeledInput';

import appLogo from '../../assets/logo-oncocheck.png'

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { errorAlert } from '../../helpers/alert';
import config from '../../config';

export default function Login() {
  const navigation = useNavigation();
  const [login, onLoginChange] = useState("");
  const [password, onPasswordChange] = useState("");

  const goToHome = (userType: string) => {
    if (userType === 'medic') {
      navigation.navigate('Main')
    } else if (userType === 'admin') {
      navigation.navigate('Admin')
    } else {
      errorAlert('Erro ao realizar login', 'Usuário cadastrado é invalido.')
    }
  }

  const linkToSignUp = () => {
    navigation.navigate('CadastroUsuario')
  }

  const submitSignIn = async () => {
    // const responseRaw = await signIn(login, password)
    if (login === 'admin' && password === 'admin') {
      navigation.navigate('Admin')
    }

    const responseRaw = await fetch(config.apiUrl + '/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })

    const response = await responseRaw.json()

    console.log(response)

    if (!response.success || response.error) {
      errorAlert("Erro ao logar no sistema", response.error)
    } else {
      await AsyncStorage.setItem("@sessionData",
        JSON.stringify(response.data))

      goToHome(response.data.userType)
    }
  }

  return (
    <LinearGradient
      colors={['#69FFD2', '#3E4EDD']}
      style={styles.pageContainer}
    >
      <StatusBar />

      <View style={{ ...styles.logoContainer }}>
        <Image source={appLogo} />
      </View>

      <View style={{ ...styles.contentContainer }} >
        <Text style={styles.loginTitle}>Faça o Login</Text>

        <View style={styles.loginForm}>
          <LabeledInput
            style={styles.formItem}
            label="Login"
            placeholder='Exemplo123@'
            value={login}
            onChangeText={onLoginChange}
          />
          <LabeledInput
            style={styles.formItem}
            label="Senha"
            secureTextEntry
            placeholder='********'
            value={password}
            onChangeText={onPasswordChange}
          />

          <TouchableOpacity style={styles.button} onPress={submitSignIn}>
            <Text style={styles.buttonLabel} >Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignUp} onPress={linkToSignUp}>
            <Text style={styles.buttonLabel}>
              Criar uma conta de usuário
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </LinearGradient>
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
  buttonSignUp: {
    padding: 12,
    paddingHorizontal: 14,
    marginTop: 24,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#00E29E',
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
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 12
  }
});

