import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GerenciarUsuarios() {
    const navigation = useNavigation();

    return (
        <View style={styles.screenGUsuarios}>
            <View
                style={{
                ...styles.logoContainer,
                }}
            >
                <Text style={styles.titleDetalhe}>Editar dados do usuário</Text>
            </View>
            <View style={{ ...styles.contentContainer }} >
                <View style={styles.formItem}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput style={styles.input} placeholder='José Maria dos Santos'/>
                </View>
                <View style={styles.formItem}>
                    <Text style={styles.inputLabel}>Tipo</Text>
                    <TextInput style={styles.input} placeholder='Administrador'/>
                </View>
                <View style={styles.formItem}>
                    <Text style={styles.inputLabel}>CRM</Text>
                    <TextInput style={styles.input} placeholder='José Maria dos Santos'/>
                </View>
                <View style={styles.formItem}>
                    <Text style={styles.inputLabel}>Login</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.formItem}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput style={styles.input} placeholder='************'/>
                </View>
                <TouchableOpacity style={styles.buttonAzul}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonVermelho} onPress={() => navigation.navigate('Administrador')}>
                    <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    screenGUsuarios: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
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
    formItem: {
        marginVertical: 8
    },
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
    titleDetalhe: {
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
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