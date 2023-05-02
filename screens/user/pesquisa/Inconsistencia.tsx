import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inconsistencia() {
    const navigation = useNavigation();

    return (
        <View style={styles.screenInconsistencia}>
            <View
                style={{
                ...styles.logoContainer,
                }}
            >
                <Text style={styles.titleInconsistencia}>Relatar Inconsistência</Text>
            </View>
            <View style={{ ...styles.contentContainer }} >
                <Text style={styles.subTile}>
                    Descreva a inconsistência no campo abaixo
                </Text>
                <TextInput style={styles.inputText} multiline={true} numberOfLines={10}/>
                <TouchableOpacity style={styles.buttonAzul}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonVermelho} onPress={() => navigation.navigate('Inconsistencia')}>
                    <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screenInconsistencia: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 40,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentContainer: {
        flex: .8,
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
    titleInconsistencia: {
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
    },
    subTile: {
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',
        color: '#666666',
        marginBottom: 20,
    },
    inputText: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        height: 400,
        textAlignVertical: 'top',
    },
    buttonAzul: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#5162FA',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 8,
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
    },
    textButton: {
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
    },
  });