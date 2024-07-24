import { Image, StyleSheet, Platform, View, Text, Pressable, StatusBar, Settings } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {

  const navigation = useNavigation();

  useEffect(( ) => {
    navigation.setOptions({
      headerShown: true,
    })
  }, [navigation]);

//   const handleClick = () => {
//     // alert("registering")
//      router.navigate('/screens/LogInScreen') 
//  }
//  const handleClick2 = () => {
//     // alert("registering")
//    router.navigate('/screens/SignUpScreen') 
//   }
  return (
    <View style={styles.container}>
    <FontAwesome name="file-picture-o" size={62} color="black" style={styles.Pic} />
    <Text style={styles.AboutDesc}>I like video games, helping out my community and cats. </Text>
    <Text style={styles.UserName}>Christian Jimenez</Text>
    <Text style={styles.About}>About:</Text>
    <Text style={styles.SchoolName}>Torrance High</Text>
     <Text style={styles.HoursCompleated}>Total hours completed</Text>
     <Text style={styles.TotalHours}>34 hours</Text>
      <Text style={styles.TodaysHours}>(3 hour just completed)</Text>
       <Text style={styles.FavoriteEvent}>Favorite event(s):</Text>
        <Text style={styles.EventName}>Beach clean-up</Text>
         <Text style={styles.MostRecentEvent}>Most recent event(s)</Text>
          <Text style={styles.RecentEvent}>Park clean-up</Text>
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
  UserName: {
    fontSize: 16,
    fontWeight: 'bold',
    top:-330,
    right:-80,
  },
  SchoolName: {
    fontSize: 12,
    fontWeight: 'bold',
    top:-320,
    right:-80,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  Settings: {
    top:-205,
    right:-160,
  },
  Pic: {
    top:-170,
    left:-120,
  },
  AboutDesc: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 55,
    borderRadius: 20,
    backgroundColor:"#D9D9D9",
    borderWidth: 2,
    top:-70,
  },
  About:{
    top:-230,
    left:-120,
    fontSize:24,
  },
  HoursCompleated: {
    top:-120,
    fontSize:20,
  },
    TotalHours: {
    top:-110,
    fontSize:20,
  },
    TodaysHours: {
    top:-110,
    fontSize:20,
  },
    FavoriteEvent: {
    top:-80,
    fontSize:20,
  },
    EventName: {
    top:-70,
    fontSize:20,
  },
    MostRecentEvent: {
    top:-35,
    fontSize:20,
  },
   RecentEvent: {
    top:-25,
    fontSize:20,
  },
});
