import { Text, TextInput, View, StyleSheet } from "react-native"

interface Props {
  label: string
  [param: string]: any
}

export default function LabeledInput({
  label,
  placeholder,
  style: inputStyles,
  ...props
}: Props) {
  return (
    <View style={inputStyles}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 4,
    color: '#666666'
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderWidth: 0,
    borderRadius: 8
  },
})