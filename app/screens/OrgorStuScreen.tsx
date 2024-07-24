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
     router.navigate('/screens/StuSignUpScreen') 
 }
 const handleClick2 = () => {
    // alert("registering")
   router.navigate('/screens/OrgSignUpScreen') 
 }

  return (
    <View style={styles.container}>
    <Text style={styles.Stu}>are you student!</Text>
    <Text style={styles.Org}>or a organization</Text>
    <Pressable onPress={handleClick} style={styles.button}>
    <Text>Student</Text>
    </Pressable> 
    <Pressable onPress={handleClick2} style={styles.button2}>
    <Text>Orginization</Text>
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
    Stu: {
        fontSize: 40,
        fontWeight: 'bold',
        top: -175
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },
    Org: {
      fontSize: 40,
      fontWeight: 'bold',
      top: -150
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 55,
        borderRadius: 20,
        backgroundColor:"#6FEB6F",
        borderWidth: 2,
        top:-10,
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 45,
        borderRadius: 20,
        backgroundColor:"#FFFFFF",
        borderWidth: 2,
        top:-10,
    },
});