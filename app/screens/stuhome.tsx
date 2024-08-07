import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
} from "react-native";

import { router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { Image } from "expo-image";
import * as Location from "expo-location";
import CustomMarker from "./CustomMarker";

// import img from "../../assets/images/table_map.png"

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const locationData = [
    { latitude: 34.000326, longitude: -118.296743 },
    { latitude: 33.96694106945521, longitude: -118.33989293426717 },
    { latitude: 33.884437307545255, longitude: -118.33919168318681 },
    { latitude: 33.88011069419912, longitude: -118.41025804717893 },
    { latitude: 33.88319002665142, longitude: -118.37156655233294 },
    { latitude: 33.916868006078886, longitude: -118.3430272896389 },
    { latitude: 33.934298633718825, longitude: -118.33677941170436 },
    { latitude: 34.01342501018935, longitude: -118.30815762619261 },
    { latitude: 33.99289171283299, longitude: -118.31305472440025 },
  ];
  //   const mapRef = React.createRef();

  //   const goToMyLocation = async (location) => {
  //     console.log("This is the location", location);
  //     mapRef.current.animateCamera({
  //       center: {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //       },
  //     });
  //   };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5,
      });
      setLocation(location);

      setInitialRegion({
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        latitude: 34.000326,
        longitude: -118.296743,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
      });

      //   goToMyLocation(location);
    })();
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
    // alert("registering")
    router.navigate("/screens/eventpage");
  };
  const handleClick5 = () => {
    alert("You are already on this page");
    //  router.navigate('/screens/orgpost')
  };
  const handleClick6 = () => {
    // alert("You are already on this page");
     router.navigate('/screens/orgpost')
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.distanceBox}>
        <Text style={styles.distance}>2.0 Miles Away</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.titleMap}>Map</Text>
        <View style={styles.eventContainer}>
        <Text style={styles.ActiveEvents}>3 Active Events</Text>
        </View>
        <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
          onPress={handleClick2}
        />
      </View>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Pressable onPress={handleClick6}>
        {locationData.map((data, index) => (
          <CustomMarker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`Park Clean-Up`}
            description={`4.95`}
          />
        ))} 
        </Pressable>
      </MapView>

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
            source={require("../../assets/images/tabler_map-pin-2 (1).png")}
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
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  titleMap: {
    fontSize: 40,
    color:'#22799F',
    top: 22,
    left: -145,
  },
  container: {
    backgroundColor: "#4BB8E7",
    alignItems: "center",
    height: "100%",
  },
  mapIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  hrIcon: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  searchIcon: {
    color: "#FFFFFF",
    height: 38,
    width: 38,
    // objectFit: "fill"

    // backgroundColor: "black"
  },

  ActiveEvents: {
    fontSize: 18,
    fontWeight: 300,
    color: '#1B6C8F'
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  profile: {
    top: -10,
    right: -160,
  },
  map: {
    width: "100%",
    height: "80%",
    top: 40,
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
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: "#FFFFFF",
    top: 5
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
  top: {
    backgroundColor: "#4BB8E7",
    top: 20,
  },
  button4: {
    alignItems: "center",
    justifyContent: "center",
    right: -60,
    position: "absolute",
    bottom: 40,
  },
  distance: {
    fontSize: 18,
    fontWeight: 300,
    color: '#1B6C8F',
    top: 1,
    left: 10,
    width: "75%",
    textAlign: 'center',
  },
distanceBox: {
    width: 110,
    height: 55,
    backgroundColor: "#88DAFD",
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "#58BBE6",
    textAlign: "center",
    position: "absolute",
    left: -3,
    top: 133,
    zIndex: 1,
  },
  eventContainer: {
    backgroundColor:"#88DAFD",
        borderRadius:10,
        position:'absolute',
        left:-150,
        top:80,
        borderWidth:1,
        paddingLeft: 10,
        paddingRight: 10
  }
});
