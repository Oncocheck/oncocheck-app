import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function ConsultarInconsistencias() {
    const navigation = useNavigation();

    return (
        <View style={styles.screenGInconsistencias}>
            <View style={styles.blocoButtons}>
                <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('Administrador')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30}/>
                </TouchableOpacity>
            </View>
            <View
                style={{
                ...styles.logoContainer,
                }}
            >
                <Text style={styles.titleFavorito}>Inconsistências</Text>
            </View>
            <View style={{ ...styles.contentContainer }} >
                <View style={{ ...styles.infoContainer }} >
                    <View style={{ ...styles.nomeContainer }}>
                        <Text style={styles.subTitle}>José Maria dos Santos</Text>
                        <Text style={styles.subTitleBlue}>NSE</Text>
                    </View>
                    <Text style={styles.descricao}>Existe um erro na descrição do exame NSE</Text>
                </View>
                <View style={{ ...styles.infoContainer }} >
                    <View style={{ ...styles.nomeContainer }}>
                        <Text style={styles.subTitle}>José Maria dos Santos</Text>
                        <Text style={styles.subTitleBlue}>NSE</Text>
                    </View>
                    <Text style={styles.descricao}>Não consigo acessar os detalhes dos exames relacionados</Text>
                </View>
                <View style={{ ...styles.infoContainer }} >
                    <View style={{ ...styles.nomeContainer }}>
                        <Text style={styles.subTitle}>José Maria dos Santos</Text>
                        <Text style={styles.subTitleBlue}>NSE</Text>
                    </View>
                    <Text style={styles.descricao}>Não consigo acessar os detalhes dos exames relacionados</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screenGInconsistencias: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom: 28,
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
    },
    titleFavorito: {
        fontWeight: '600',
        fontSize: 30,
        margin: 0,
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
    subTitle: {
        fontWeight: '500',
        fontSize: 16,
    },
    subTitleBlue: {
        fontWeight: '600',
        fontSize: 14,
        color: '#3E4EDD',
    },
    descricao: {
        fontWeight: '600',
        fontSize: 14,
    },
    infoContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#50555C',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    nomeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });