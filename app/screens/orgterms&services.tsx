import { Image, StyleSheet, Platform, View, Text, Pressable, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {

  const navigation = useNavigation();

  useEffect(( ) => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);

  const handleClick = () => {
    // alert("registering")
     router.navigate('/screens/OrgSignUpScreen') 
 }
  return (
    <View style={styles.container}>
      <Text style={styles.terms}>Terms&services!</Text>
      <Pressable onPress={handleClick} style={styles.button}>
    <Text style={styles.text}>back</Text>
    </Pressable>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  
  },
  terms: {
    fontSize:35,
    fontWeight: 'bold',
    top:-300,
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
    paddingVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 2,
    elevation: 7,
    backgroundColor:"#007AFF",
    height: 48
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 1,
    backgroundColor:"#007AFF",
    height: 48,
  }
});