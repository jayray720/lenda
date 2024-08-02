import {
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
import { FontAwesome } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { Image } from "expo-image";

// import img from "../../assets/images/table_map.png"

export default function SignUpScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
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
  const handleClick4 = () => {
    // alert("registering");
    router.navigate("/screens/orgpost");
  };
  const handleClick5 = () => {
    alert("You are already on this page");
    //  router.navigate('/screens/SearchScreen')
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <Text style={styles.titleMap}>Map!</Text>
        <Text style={styles.titleHowFar}>1.0 miles</Text>
        <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
          onPress={handleClick2}
        />
      </View>
      <MapView style={styles.map} />

      <View style={styles.bottom}>
        <Pressable onPress={handleClick} style={styles.button}>
          <Image
            style={styles.image2}
            source={require("../../assets/images/icon-park-outline_inbox (1).png")}
          />
          <Text style={styles.text2}>inbox</Text>
        </Pressable>

        <Pressable onPress={handleClick5} style={styles.button2}>
          <Image
            style={styles.image}
            source={require("../../assets/images/tabler_map-pin-2 (1).png")}
            // contentFit="cover"
            // transition={1000}
          />
          <Text style={styles.text2}>map</Text>
        </Pressable>

        <Pressable onPress={handleClick4} style={styles.button4}>
          <Image
            style={styles.image3}
            source={require("../../assets/images/gg_add.png")}
          />
          <Text style={styles.text2}>Post</Text>
        </Pressable>

        <Pressable onPress={handleClick3} style={styles.button3}>
          <View style={{ height: 39, width: 39 }}>
            <Image
              style={styles.image4}
              source={require("../../assets/images/material-symbols_checkbook-outline-rounded (1).png")}
            />
          </View>
          <Text style={styles.text2}>Events</Text>
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
    fontSize: 18,
    top: 20,
    left: -130,
  },
  container: {
    backgroundColor: "#4BB8E7",
    alignItems: "center",
    height: "100%",
  },
  image: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  image2: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  image3: {
    height: 38,
    width: 38,
    color: "#FFFFFF",
    // backgroundColor: "black"
  },
  image4: {
    color: "#FFFFFF",
    height: "100%",
    width: "100%",
    // objectFit: "fill"

    // backgroundColor: "black"
  },

  titleHowFar: {
    fontSize: 18,
    fontWeight: "bold",
    top: 20,
    left: -130,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  profile: {
    top: -30,
    right: -150,
  },
  map: {
    width: "100%",
    height: "70%",
    top: -20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    left: -160,
    position: "absolute",
    bottom: 40,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    left: -60,
    position: "absolute",
    bottom: 40,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    right: -160,
    position: "absolute",
    bottom: 40,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bottom: {
    backgroundColor: "#4BB8E7",
    position: "absolute",
    bottom: 0,
  },
  top: {
    backgroundColor: "#4BB8E7",
  },
  button4: {
    alignItems: "center",
    justifyContent: "center",
    right: -60,
    position: "absolute",
    bottom: 40,
  },
});
