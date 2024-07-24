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
     router.navigate('/screens/LogInScreen') 
 }
  return (
    <View style={styles.container}>
      <Text style={styles.org}>What orginization are you part of</Text>
      <Pressable onPress={handleClick} style={styles.button}>
    <Text style={styles.text}>sign up</Text> 
    </Pressable>
    <Text style={styles.org2}>Boy & Girls club</Text>
    <Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 100, height: 70, top: -200,}} />
           <Image source={{uri: 'https://cdn.filestackcontent.com/resize=width:600,height:315,fit:max/quality=value:90/qo94jcTRTqZnFNPwBhQf'}}
       style={{width: 150, height: 135, top:-150,}} />
           <Text style={styles.org3}>Communities In Schools</Text>
           <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/LAUSD_seal_2022.png'}}
       style={{width: 150, height: 147, top:-100,}} />
            <Text style={styles.org4}>Los Angeles Unified School District</Text>
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
  org: {
    fontSize:20,
    fontWeight: 'bold',
    top:-150,
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
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 2,
    elevation: 7,
    backgroundColor:"#007AFF",
    top:550,
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
  },
  org2: {
    top:-200,
  },
  org3: {
    top:-300,
  },
  org4: {
    top:-275,
  },
});