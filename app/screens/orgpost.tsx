import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  StatusBar,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function OrgPost() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleClick = () => {
    // alert("registering");
     router.navigate('/screens/stuhome')
  };
  return (
    <View style={styles.container}>
      {/* <Image
              style={styles.image4}
              source={require("../../assets/images/c8385c14-a72d-4824-850e-842a4c16ac33 1.png")}
            />
      <Pressable onPress={handleClick} style={styles.button}>
        <Text style={styles.text}>back</Text>
      </Pressable> */}
      <View style={styles.eventContainer}>
      <Text style={styles.eventName}>Beach Clean-up</Text>
    </View>
      <Image
            style={styles.EventPic}
            source={require("../../assets/images/beach.png")}
          /> 
          <View style={styles.eventdescContainer}>
            <Text>
            Max Hours: 5
            </Text>
            <Text>
            Address: Venice Beach LA,CA
            </Text>
            <Text>
            Host/Client: Max
            </Text>
            <Text>
            Preferred Arrival: 3:00- 6:00 PM
           </Text>
           <Image
            style={styles.Ratings}
            source={require("../../assets/images/Vector (2).png")}
          /> 
          <Image
            style={styles.Ratings1}
            source={require("../../assets/images/Vector (2).png")}
          /> 
          <Image
            style={styles.Ratings2}
            source={require("../../assets/images/Vector (2).png")}
          /> 
          <Image
            style={styles.Ratings3}
            source={require("../../assets/images/Vector (2).png")}
          /> 
          <Image
            style={styles.Ratings4}
            source={require("../../assets/images/Vector (3).png")}
          /> 
          <Text style={styles.RatingsName}>
            4.5
          </Text>
          </View>
          <Pressable onPress={handleClick} style={styles.Back}>
          <Image
                style={styles.Back}
                source={require("../../assets/images/Vector (4).png")}
              />
               </Pressable>
               <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  eventName: {
    fontSize:50,
    bottom: 0,
  },
  EventPic: {
    width:300,
    height:300,
    position:'absolute',
    borderWidth:6,
    borderRadius:12,
    borderColor:'#88DAFD',
    top:180,
  },
  eventContainer: {
    position:'absolute',
    borderWidth:6,
    borderRadius:12,
    borderColor:'#88DAFD',
    width:415,
    height:-305,
    top:20,
    backgroundColor:'#88DAFD'
  },
  eventdescContainer:{
    position:'absolute',
    borderWidth:6,
    borderRadius:12,
    borderColor:'#88DAFD',
    width:300,
    height:145,
    bottom:327,
    backgroundColor:'#88DAFD'

  },
  Ratings: {
    width: 33,
    height: 32,
    position:'absolute',
    bottom: 10,

  },
  Ratings1: {
    width: 33,
    height: 32,
    position:'absolute',
    bottom: 10,
    left:40,

  },
  Ratings2: {
    width: 33,
    height: 32,
    position:'absolute',
    bottom: 10,
    left:80,



  },
  Ratings3: {
    width: 33,
    height: 32,
    position:'absolute',
    bottom: 10,
    left:120,
  },
  Ratings4: {
    width: 33,
    height: 32,
    position:'absolute',
    bottom: 10,
    left:160,
  },
  RatingsName: {
    width: 63,
    height: 47,
    position:'absolute',
    bottom:0,
    left:200,
    fontSize:30,

  },
  Back: {
    position: 'absolute',
    height:26,
    width:26,
    top: 50,
    left:5,
  }
});
