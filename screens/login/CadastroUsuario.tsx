import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import LabeledInput from "../../components/LabeledInput";
import config from "../../config";
import { errorAlert } from "../../helpers/alert";

export default function CadastroUsuario() {
  const navigation = useNavigation()

  const [name, onChangeName] = useState('')
  const [login, onChangeLogin] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [repeatPassword, onChangeRepeatPassword] = useState('')
  const [crm, onChangeCRM] = useState('')

  const goBack = () => {
    navigation.goBack()
  }

  const signUpUser = async () => {
    if (password !== repeatPassword) {
      errorAlert("Erro ao realizar seu cadastro", 'As senhas não batem.')
    } else {
      try {
        const url = `${config.apiUrl}/signup`
        const responseRaw = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            login,
            email,
            crm,
            password,
          })
        })

        if (responseRaw.status === 201) {
          navigation.navigate('ScreenLogin')
        } else {
          const response = await responseRaw.json()
          if (response.error) {
            errorAlert("Erro ao realizar seu cadastro", response.error)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.pageContainer}
    >
      <StatusBar />

      <ScrollView>
        <Text style={styles.signUpTitle}>Cadastre-se no App</Text>

        <View>
          <LabeledInput
            style={styles.loginItem}
            label="Nome"
            placeholder="Fulano dos Santos"
            onChangeText={onChangeName}
          />
          <LabeledInput
            style={styles.loginItem}
            label="E-Mail"
            placeholder="exemplo@email.com"
            onChangeText={onChangeEmail}
          />
          <LabeledInput
            style={styles.loginItem}
            label="CRM"
            onChangeText={onChangeCRM}
          />
          <LabeledInput
            style={styles.loginItem}
            label="Login"
            placeholder="Exemplologin1234"
            onChangeText={onChangeLogin}
          />
          <LabeledInput
            style={styles.loginItem}
            label="Senha"
            secureTextEntry
            placeholder="********"
            onChangeText={onChangePassword}
          />
          <LabeledInput
            style={styles.loginItem}
            secureTextEntry
            label="Repita a Senha"
            onChangeText={onChangeRepeatPassword}
          />

          <TouchableOpacity style={styles.signInButton} onPress={signUpUser}>
            <Text style={styles.buttonLabel}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={goBack}>
            <Text style={styles.buttonLabel}>Cancelar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    padding: 16,
    paddingTop: 32
  },
  goBackButton: {
    width: 80,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goBackButtonIcon: {
    color: '#5162fa'
  },
  signUpTitle: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: '700',
    marginBottom: 48,
  },
  loginItem: {
    marginVertical: 8
  },
  signInButton: {
    padding: 12,
    paddingHorizontal: 14,
    marginTop: 24,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#5162fa',
  },
  cancelButton: {
    padding: 12,
    paddingHorizontal: 14,
    marginTop: 24,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#F61515',
  },
  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },

})