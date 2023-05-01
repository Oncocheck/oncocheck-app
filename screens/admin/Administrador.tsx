import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appLogo from '../../assets/logo-oncocheck.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function Administrador() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#69FFD2', '#3E4EDD']} style={styles.screenAdministrador}>
      <View
        style={{
          ...styles.logoContainer,
        }}
      >
        <Image source={appLogo} />
        <Text style={styles.titleAdministrador}>Administrador</Text>
      </View>

      <View style={{ ...styles.contentContainer }} >

      <View style={styles.adminForm}>
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonAzul} onPress={() => navigation.navigate('GerenciarExames')}>
            <Text style={styles.textButton}>Gerenciar Exames</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAzul} onPress={() => navigation.navigate('GerenciarUsuarios')}>
            <Text style={styles.textButton}>Gerenciar Usuários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAzul} onPress={() => navigation.navigate('ConsultarInconsistencias')}>
            <Text style={styles.textButton}>Consultar Inconsistências</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonVermelho} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      </View>

    </LinearGradient >
  )
}

const styles = StyleSheet.create({
    screenAdministrador: {
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
    adminForm: {
        marginTop: 16,
        marginBottom: 24,
        padding: 8
    },
    titleAdministrador: {
        fontWeight: '600',
        fontSize: 30,
        color: '#FFFFFF',
        margin: 0,
    },
    boxButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '50%',
    },
    buttonAzul: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#5162FA',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 8,
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
    },
    buttonVermelho: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#F61515',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 8,
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
    },
    textButton: {
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
    },
});
