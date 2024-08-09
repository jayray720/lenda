import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
} from "react-native";

import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function OrgPost() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleExitClick = () => {
    // alert("registering");
     router.navigate('/screens/stuhome')
  };

  const handleClick = () => {
    router.navigate("/screens/HoursScreen");
  };

  const handleClick5 = () => {
    // alert("You are already on this page");
    router.navigate("/screens/stuhome");
  };

  const handleClick3 = () => {
    // alert("registering")
    router.navigate("/screens/eventpage");
  };

  const handleProfileClick = () => {
    // alert("registering")
    router.navigate("/screens/ProfileScreen");
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
      <View style={styles.header}>
        <Text style={styles.eventName}>Park Clean-Up</Text>
        <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
          onPress={handleProfileClick}
        />
      </View>

        <View style={styles.eventdescContainer}>
          <Image
            style={styles.EventPic}
            // source={require("../../assets/images/beach.png")}
            source={require("../../assets/images/image 21 (1).png")}
          /> 
            <Text style={styles.eventHeader}>Details:</Text>
            <Text style={styles.eventText}>
            Max Hours: 3
            </Text>
            <Text style={styles.eventText}>
            Address: 1248 W. St, Los Angeles, CA
            </Text>
            <Text style={styles.eventText}>
            Host/Client: Max
            </Text>
            <Text style={styles.eventText}>
            Preferred Arrival: 10:00 - 11:00 AM
           </Text>
           {/* <Image
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
          </Text> */}
          </View>
          <Pressable onPress={handleExitClick} style={styles.Back}>
          <Image
                style={styles.Back}
                source={require("../../assets/images/Vector (4).png")}
              />
           </Pressable>
       <View style={styles.bottom}>
        <Pressable onPress={handleClick} style={styles.hrButton}>
          <Image
            style={styles.hrIcon}
            source={require("../../assets/images/request.png")}
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
          <Text style={styles.text2}>Map</Text>
        </Pressable>

        <Pressable onPress={handleClick3} style={styles.searchButton}>
         <View style={{ height: 39, width: 39 }}>
            <Image
              style={styles.searchIcon}
              source={require("../../assets/images/gg_add (1).png")}
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
  header: {
    position: "absolute",
    borderWidth: 6,
    borderRadius: 12,
    borderColor: "#319BC8",
    width: 450,
    height: 120,
    top: 0,
    backgroundColor: "#4BB8E7",
  },
  profile: {
    top: -5,
    right: -350,
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
    top: 47,
    right: -20,
    fontSize: 40,
    color: "#22799F",
  },
  EventPic: {
    width:250,
    height:300,
    alignSelf: 'center',
  },
  eventdescContainer:{
    position:'absolute',
    borderWidth:6,
    borderRadius:12,
    borderColor:'#88DAFD',
    width:300,
    height:510,
    top:158,
    backgroundColor:'#88DAFD',
    justifyContent: 'center',

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
    top: 80,
    left:10,
  },

  bottom: {
    backgroundColor: "#4BB8E7",
    position: "absolute",
    bottom: 0,
    borderWidth: 4,
    borderColor: "#319BC8",
    width: "100%",
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 5,
  },
  mapIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
  },
  hrIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
  },
  searchIcon: {
    color: "#FFFFFF",
    height: 38,
    width: 38,
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    top: 5,
  },
  hrButton: {
    alignItems: "center",
    justifyContent: "center",
    left: 50,
    position: "absolute",
    bottom: 40,
    width: 54,
  },
  mapButton: {
    alignItems: "center",
    alignSelf: "center",
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
  eventText: {
    top: 10,
    left: 20,
    fontSize: 20,
    color: "#287090"
  },
  eventHeader: {
     left: 20,
     top: 5,
     fontSize: 22,
     fontWeight: "500",
  },
});
