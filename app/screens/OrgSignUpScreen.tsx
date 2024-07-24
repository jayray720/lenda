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
     router.navigate('/screens/whatorg') 
 }
 const handleClick2 = () => {
    // alert("registering")
   router.navigate('/screens/orgterms&services') 
 }

  return (
    <View style={styles.container}>
    <Text style={styles.Org}>Enter your email address</Text>
    <Text style={styles.Email}>djdj@mgmail.com</Text>
    <Pressable onPress={handleClick} style={styles.button}>
    <Text style={styles.text}>Log In</Text>
    </Pressable>
    <Pressable onPress={handleClick2} style={styles.button2}>
    <Text style={styles.text}>term & servacices</Text>
    </Pressable>
    <StatusBar style="auto" />
  </View>
  );
}
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    Org: {
        fontSize: 30,
        fontWeight: 'bold',
        top: -230
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },
    Email: {
      fontSize: 30,
      fontWeight: 'bold',
      top: -150
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
      top:190,
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 20,
        backgroundColor:"#D6D6D6",
        borderWidth: 1,
        top:-130,
        left:-100,
    },
  });