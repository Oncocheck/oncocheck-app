import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {
    const navigation = useNavigation();

    return (
        <Animated.View style={styles.screenMain}>
            <Animated.View style={styles.blocoButtons}>
                <TouchableOpacity style={styles.blocosArrow} onPress={() => navigation.navigate('MainPage')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30}/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={{
                ...styles.logoContainer,
                }}
            >
                <Text style={styles.titleFavorito}>Exames Favoritos</Text>
            </Animated.View>
            <Animated.View style={{ ...styles.contentContainer }} >
                <Animated.View style={{ ...styles.infoContainer }} >
                    <Text style={styles.subTitlePesquisaHome}>NSE</Text>
                    <TouchableOpacity style={styles.blocosArrow}>
                        <FontAwesomeIcon icon={faTrashCan} size={20}/>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ ...styles.infoContainer }} >
                    <Text style={styles.subTitlePesquisaHome}>TG</Text>
                    <TouchableOpacity style={styles.blocosArrow}>
                        <FontAwesomeIcon icon={faTrashCan} size={20}/>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </Animated.View >
    );
}

const styles = StyleSheet.create({
    screenMain: {
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
    }
  });