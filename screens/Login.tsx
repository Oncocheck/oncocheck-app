import { Animated, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import appLogo from '../assets/logo-oncocheck.png'
import { NativeStackParamList } from '../router';
import LabeledInput from '../components/LabeledInput';

type Props = NativeStackScreenProps<NativeStackParamList, 'Login'>

export default function Login({ navigation }: Props) {
  const linkToSignUp = () => {
    navigation.navigate('CadastroUsuario')
  }

  return (
    <LinearGradient colors={['#69FFD2', '#3E4EDD']} style={styles.pageContainer}>
      <StatusBar />

      <Animated.View style={{ ...styles.logoContainer }}>
        <Image source={appLogo} />
      </Animated.View>

      <Animated.View style={{ ...styles.contentContainer }} >
        <Text style={styles.loginTitle}>Faça o Login</Text>

        <View style={styles.loginForm}>
          <LabeledInput
            style={styles.formItem}
            label="Login"
            placeholder='Exemplo123@'
          />
          <LabeledInput
            style={styles.formItem}
            label="Senha"
            secureTextEntry
            placeholder='********'
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword} onPress={linkToSignUp}>
            <Text>Criar uma conta de usuário</Text>
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
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 12
  }
});

