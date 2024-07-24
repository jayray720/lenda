import { Image, StyleSheet, Platform, View, Text, Pressable, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function SignUpScreen() {

    const navigation = useNavigation();

    useEffect(( ) => {
      navigation.setOptions({
        headerShown: true,
      })
    }, [navigation]);
 const handleClick = () => {
    // alert("registering")
     router.navigate('/screens/MainScreen') 
 }
//  const handleClick2 = () => {
//     // alert("registering")
//    router.navigate('/(tabs)/index.tsx') 
//  }

  return (
    <View style={styles.container}>
    <Text style={styles.titleEmail}>Email!</Text>
    <Text style={styles.titlePassword}>Password</Text>
    <Pressable onPress={handleClick} style={styles.button}>
    <Text style={styles.text}>Log In</Text>
    </Pressable>
    {/* <Pressable onPress={handleClick2} style={styles.button2}>
    <Text style={styles.text}>back</Text>
    </Pressable> */}
    <StatusBar style="auto" />
  </View>
  );
}
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleEmail: {
        fontSize: 10,
        fontWeight: 'bold',
        height: 75
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },
    titlePassword: {
      fontSize: 10,
      fontWeight: 'bold',
      height: 150
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor:"#007AFF",
    },
    button2: {
        alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 17,
      borderRadius: 2,
      backgroundColor:"#000000",
      marginLeft: "auto",
      left: -275,
      bottom: 100,
    }
  });