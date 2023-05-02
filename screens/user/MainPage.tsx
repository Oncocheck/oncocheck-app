import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import Home from '../../assets/home-oncocheck.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Organ {
  id: number
  name: string
}

export default function MainPage() {
  const navigation = useNavigation();
  const [selectedOrgan, setSelectedOrgan] = useState('');

  const [availableOrgans, setAvailableOrgans] = useState<string[]>([])

  const linkToFavorites = () => {
    navigation.navigate('Favoritos')
  }

  const selectOrgan = (item: string, _: number) => {
    setSelectedOrgan(item)
  }

  const linkToExamSearchResults = () => {
    // navigation.navigate('')
  }

  const loadAvailableOrgans = async () => {
    try {
      const cacheOrgans = await AsyncStorage.getItem('@availableOrgans')

      if (cacheOrgans) {
        console.log("Pegando do cache")
        setAvailableOrgans(JSON.parse(cacheOrgans))
      } else {
        console.log("Pegando da API")
        const url = "http://192.168.0.105:8080/organs"
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json"
          }
        })

        const json = await response.json()

        const fetchedOrgans = json.data.map((organ: Organ) => organ.name)

        await AsyncStorage.setItem(
          "@availableOrgans",
          JSON.stringify(fetchedOrgans)
        )

        setAvailableOrgans(fetchedOrgans)
      }

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    loadAvailableOrgans()
  }, [])

  return (
    <LinearGradient colors={['#69FFD2', '#3E4EDD']} style={styles.screenMain}>
      <Animated.View style={styles.blocoButtons}>
        <TouchableOpacity
          style={styles.blocosArrow}
          onPress={navigation.goBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blocosArrow}
          onPress={linkToFavorites}
        >
          <FontAwesomeIcon icon={faStar} size={30} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{ ...styles.logoContainer, }} >
        <Text style={styles.titleHome}>
          Buscar exames de acordo com a parte do corpo relacionada
        </Text>
        <Image source={Home} style={styles.imageHome} />
      </Animated.View>

      <Animated.View style={{ ...styles.contentContainer }} >

        <View style={styles.boxPesquisaHome}>
          <Text style={styles.titlePesquisaHome}>
            Ou digite aqui sua suspeita
          </Text>
          <SelectDropdown
            data={availableOrgans}
            onSelect={selectOrgan}
          />
          <TouchableOpacity style={styles.buttonPesquisaHome}>
            <Text style={styles.buttonPesquisaHomeText} onPress={() => { }}>
              Consultar
            </Text>
          </TouchableOpacity>
        </View>

      </Animated.View>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  screenMain: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  backgroundPageHome: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleHome: {
    fontWeight: '600',
    fontSize: 30,
    color: '#FFFFFF',
    margin: 0,
    textAlign: 'center',
  },
  blocoButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    paddingTop: 40,
  },
  blocosArrow: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 30,
  },
  imageHome: {
    width: 220,
    height: 300,
  },
  boxPesquisaHome: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    width: '93%',
    height: '80%',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  titlePesquisaHome: {
    fontWeight: '500',
    fontSize: 16,
    color: '#666666',
  },
  pesquisaHome: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
  },
  buttonPesquisaHome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5162FA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
    titleHome: {
        fontWeight: '600',
        fontSize: 30,
        color: '#FFFFFF',
        margin: 0,
        textAlign: 'center',
    },
    blocoButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '80%',
      paddingTop: 40,
    },
    blocosArrow: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        fontSize: 30,
    },
    imageHome: {
      width: 220,
      height: 300,
    },
    boxPesquisaHome: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      width: '93%',
      height: '80%',
      padding: 10,
      borderRadius: 20,
      justifyContent: 'space-between',
    },
    titlePesquisaHome: {
      fontWeight: '500',
      fontSize: 16,
      color: '#666666',
    },
    pesquisaHome: {
      backgroundColor: '#F6F6F6',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 8,
      height: 50,
      margin: 10,
      paddingHorizontal: 10,
    },
    buttonPesquisaHome: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#5162FA',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderRadius: 8,
    },
    buttonPesquisaHomeText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
    },
  });
