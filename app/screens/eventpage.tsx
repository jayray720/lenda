import { Image, StyleSheet,TextInput, Platform, View, Text, Pressable, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { FontAwesome } from "@expo/vector-icons";

export default function SignUpScreen() {

    const navigation = useNavigation();

    useEffect(( ) => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [navigation]);
    const handleClick = () => {
      // alert("registering")
      router.navigate("/screens/HoursScreen");
    };
    const handleClick2 = () => {
      // alert("registering")
      router.navigate("/screens/ProfileScreen");
    };
    const handleClick3 = () => {
      alert("You are already on this page");
      // router.navigate("/screens/eventpage");
    };
    const handleClick5 = () => {
      // alert("You are already on this page");
       router.navigate('/screens/stuhome')
    };

  return (
    <View style={styles.container}>
    <View style={styles.Header}>
    <Text style={styles.headerText}>Search

    </Text>
    <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
          onPress={handleClick2}
        />
      </View>
      <View style={styles.search}>
      <TextInput style={styles.searchBar}>
        search
      </TextInput>
      <Image
            style={styles.Filter}
            source={require("../../assets/images/Filter.png")}
          /> 
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
           </View>
           <View style={styles.bottom}>
        <Pressable onPress={handleClick} style={styles.hrButton}>
          <Image
            style={styles.hrIcon}
            source={require("../../assets/images/Vector (5).png")}
          />
          <Text style={styles.text2}>Hours</Text>
        </Pressable>

        <Pressable onPress={handleClick5} style={styles.mapButton}>
          <Image
            style={styles.mapIcon}
            source={require("../../assets/images/tabler_map-pin-2 (2).png")}
            // contentFit="cover"
            // transition={1000}
          />
          <Text style={styles.text2}>map</Text>
        </Pressable>

        <Pressable onPress={handleClick3} style={styles.searchButton}>
          <View style={{ height: 39, width: 39 }}>
            <Image
              style={styles.searchIcon}
              source={require("../../assets/images/gg_add (2).png")}
            />
          </View>
          <Text style={styles.text2}>Find</Text>
        </Pressable>
      </View>
  
    <StatusBar style="auto" />
  </View>
  );
}
  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    Header: {
      position:'absolute',
      borderWidth:6,
      borderRadius:12,
      borderColor:'#319BC8',
      width:417,
      height:188,
      top:0,
      backgroundColor:'#4BB8E7'
    },
    headerText: {
      position:'absolute',
      top:60,
      fontSize:50,
      color:'#22799F'
    },
    EventPic: {
      width:300,
      height:300,
      position:'absolute',
      borderWidth:6,
      borderRadius:12,
      borderColor:'#88DAFD',
      top:290,
    },
    eventdescContainer:{
      position:'absolute',
      borderWidth:6,
      borderRadius:12,
      borderColor:'#88DAFD',
      width:300,
      height:145,
      bottom:170,
      backgroundColor:'#88DAFD'
  
    },

  hrButton: {
    alignItems: "center",
    justifyContent: "center",
    //   left: -160,
    left: 50,
    position: "absolute",
    bottom: 40,
    width: 54,
  },
  mapButton: {
    alignItems: "center",
    alignSelf: "center",
    //   left: -60,
    position: "absolute",
    bottom: 40,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    right: 50,
    position: "absolute",
    bottom: 40,
    width: 54,
  },
  bottom: {
    backgroundColor: "#4BB8E7",
    position: "absolute",
    bottom: 0,
    borderWidth: 4,
    borderColor: "#319BC8",
    width: "100%",
    height: 147,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  searchIcon: {
    color: "#FFFFFF",
    height: 38,
    width: 38,
    // objectFit: "fill"

    // backgroundColor: "black"
  },
  hrIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  mapIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  profile: {
    top: 70,
    right: -320,
  },
  searchBar: {
    color:'#FFFFFF ',
    left:-40,
  },
  search: {
    borderWidth:1,
    paddingHorizontal:50,
    position: 'absolute',
    top:190,
    borderRadius:9999,
  },
  Filter:{
    width:16,
    height:16,
    position:'absolute',
    right:5,
    top:2,
  },
  });