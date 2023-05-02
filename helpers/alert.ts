import { Alert } from "react-native";

export function errorAlert(title: string, message: string) {
  Alert.alert(title, message, [
    {
      text: "Entendido",
      style: 'cancel',
      onPress: () => { }
    }
  ], {
    cancelable: true,
  })
}