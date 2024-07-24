import { Image, StyleSheet, Platform, View, Text, Pressable, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';


export default function SignUpScreen() {
  const [count, setCount] = useState(0);
  

    const navigation = useNavigation();

    useEffect(( ) => {
      navigation.setOptions({
        headerShown: true,
      })
    }, [navigation]);
//  const handleClick = () => {
//     alert("registering")
//     //  router.navigate('/screens/profileScreen') 
//  }
//  const handleClick2 = () => {
//     // alert("registering")
//    //router.navigate('/screens/SignUpScreen') 
//  }

  return (
    <View style={styles.container}>
    <Pressable onPress={() => setCount(count - 1)}style={styles.button}>
    <Text style={styles.text}>-</Text>
    </Pressable>
    <Text style={styles.number}>{count}</Text>
    <Pressable onPress={() => setCount(count + 1)}style={styles.button2}>
    <Text style={styles.text}>+</Text>
    </Pressable>
    {/* <StatusBar style="auto" /> */}
  </View>
  );
}
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleMap: {
        fontSize: 18,
        fontWeight: 'bold',
        height: 80
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },
    titleHowFar: {
      fontSize: 18,
      fontWeight: 'bold',
      height: 750
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      color: 'white',
    },
    button: {
      alignItems: 'center',
      paddingVertical:0,
      paddingHorizontal: 20,
      borderRadius: 4,
      backgroundColor:"#000000",
      left: -100,
      bottom: -0,
    },
    button2: {
        alignItems: 'center',
      paddingVertical: 0,
      paddingHorizontal: 20,
      borderRadius: 4,
      backgroundColor:"#000000",
      right:-100,
      bottom: 56,
    },
    number: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#000000",
      bottom: 28,
    }
  });