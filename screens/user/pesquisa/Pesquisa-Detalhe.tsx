import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Cerebro from '../../../assets/cerebro.png'

export default function PesquisaDetalhe() {
    const navigation = useNavigation();

    return (
        <View style={styles.screenMain}>
            <View style={styles.blocoButtons}>
                <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('Pesquisa')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.fullLogoContainer}>
                <View
                    style={{
                    ...styles.logoContainer,
                    }}
                >
                    <Image source={Cerebro} style={styles.imageListagem}/>
                    <Text style={styles.titleDetalhe}>TG</Text>
                </View>
                <View style={styles.subLogoContainer}>
                    <Text style={styles.subTitleDetalhe}>Favoritar</Text>
                    <TouchableOpacity style={styles.blocosArrow}>
                        <FontAwesomeIcon icon={faStar} size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ ...styles.contentContainer }} >
                <Text style={styles.textListagem}>
                    A tireoglobulina é um marcador tumoral muito utilizado para avaliar o desenvolvimento do câncer de tireoide, especialmente durante o seu tratamen-to, ajudando o médico a adaptar a forma de tratamen-to e/ou as doses, de acordo com os resultados.
                </Text>
                <Text style={styles.textListagem}>
                    O valor de tireoglobulina em uma pessoa saudável, sem qualuer alteração na tireoide, geralmente é inferior a 10 ng/mL. Assim se o resultado do exame estiver acima desses valores, pode indicar a pre-sença de um problema na tireoide.
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonVermelho} onPress={() => navigation.navigate('Inconsistencia')}>
                    <Text style={styles.textButton}>Relatar inconsistência</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screenMain: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    fullLogoContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 28,
        paddingBottom: 28,
        width: '100%'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 32,
        paddingHorizontal: 8,
        borderWidth: 0,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleDetalhe: {
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
    },
    subTitleDetalhe: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
    textListagem: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'justify',
    },
    blocoButtons: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      width: '80%',
      paddingTop: 40,
    },
    blocosArrow: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        fontSize: 30,
    },
    subTitlePesquisaHome: {
        fontWeight: '500',
        fontSize: 16,
    },
    infoContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#50555C',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageListagem: {
        width: 90,
        height: 65,
    },
    buttonVermelho: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginBottom: 20,
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