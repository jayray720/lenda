import { Image, StyleSheet, Platform, View, Text, Pressable, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';



export default function SignUpScreen() {

    const navigation = useNavigation();

    useEffect(( ) => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [navigation]);
 const handleClick = () => {
    // alert("registering")
     router.navigate('/screens/HoursScreen') 
 }
 const handleClick2 = () => {
    // alert("registering")
   router.navigate('/screens/ProfileScreen') 
 }
 const handleClick3 = () => {
  // alert("registering")
   router.navigate('/screens/SearchScreen') 
}

  return (
    
    <View style={styles.container}>
    <Text style={styles.titleMap}>Map!</Text>
    <Text style={styles.titleHowFar}>1.0 miles</Text>
    <FontAwesome name="user-circle" size={50} color="black" style={styles.profile} onPress={handleClick2}/>
    <MapView style={styles.map} />
    <Pressable onPress={handleClick} style={styles.button}>
    <Text style={styles.text}>Hr</Text>
    </Pressable> 
    <Pressable onPress={handleClick3} style={styles.button2}>
    <Text style={styles.text}>search</Text>
    </Pressable>
    <StatusBar style="auto" />
  </View>
  );
}
  const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
    },
    titleMap: {
        fontSize: 18,
        top:30,
        left:-130,
    },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    
    
    },
    titleHowFar: {
      fontSize: 18,
      fontWeight: 'bold',
      top:30,
      left:-130,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
 
    profile: {
     top: -20,
     right: -150, 
    },
    map: {
      width: '100%',
      height: '70%',
      top:0,
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor:"#007AFF",
      height:65,
      right:-130,
    }, 
    button: {
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor:"#007AFF",
      top:42,
      left:-130,
    },
  });