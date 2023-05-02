import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Cerebro from '../../../assets/cerebro.png'

export default function PesquisaListagem() {
    const navigation = useNavigation();

    return (
        <View style={styles.screenPesquisa}>
            <View style={styles.blocoButtons}>
                <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('MainPage')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30}/>
                </TouchableOpacity>
            </View>
            <View
                style={{
                ...styles.logoContainer,
                }}
            >
                <Image source={Cerebro} style={styles.imageListagem}/>
                <Text style={styles.titleListagem}>Cérebro</Text>
            </View>
            <View style={styles.subLogoContainer}>
                <Text style={styles.subTitleListagem}>Exames relacionados</Text>
            </View>
            <View style={{ ...styles.contentContainer }} >
                <Text style={styles.subTitlePesquisaHome}>2 resultados:</Text>
                <View style={{ ...styles.infoContainer }} >
                    <Text style={styles.subTitlePesquisaHome}>NSE</Text>
                    <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('Detalhe')}>
                        <FontAwesomeIcon icon={faEye} size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={{ ...styles.infoContainer }} >
                    <Text style={styles.subTitlePesquisaHome}>TG</Text>
                    <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('Detalhe')}>
                        <FontAwesomeIcon icon={faEye} size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screenPesquisa: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 28,
        paddingBottom: 28,
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
    titleListagem: {
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
    },
    subTitleListagem: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
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
  });