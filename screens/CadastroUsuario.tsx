import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import LabeledInput from "../components/LabeledInput";
import { NativeStackParamList } from "../router"

type Props = NativeStackScreenProps<NativeStackParamList, 'CadastroUsuario'>;

export default function CadastroUsuario({ navigation }: Props) {
  const goBack = () => {
    navigation.goBack()
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
          />
          <LabeledInput style={styles.loginItem} label="CRM" />
          <LabeledInput
            style={styles.loginItem}
            label="Login"
            placeholder="Exemplologin1234"
          />
          <LabeledInput
            style={styles.loginItem}
            label="Senha"
            secureTextEntry
            placeholder="********"
          />
          <LabeledInput
            style={styles.loginItem}
            secureTextEntry
            label="Repita a Senha"
          />

          <TouchableOpacity style={styles.signInButton}>
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