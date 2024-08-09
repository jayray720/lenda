import {
  Modal,
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

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleClick = () => {
    // alert("registering")
    router.navigate("/screens/HoursScreen");
  };
  const handleClick2 = () => {
    alert("You are already on this page");
    // router.navigate("/screens/ProfileScreen");
  };
  const handleClick3 = () => {
    // alert("registering")
    router.navigate("/screens/eventpage");
  };
  const handleClick5 = () => {
    // alert("You are already on this page");
    router.navigate("/screens/stuhome");
  };
  const handleClick6 = () => {
    // alert("You are already on this page");
    router.navigate("/screens/orgpost");
  };
  const handleClick7 = () => {
    // alert("You are already on this page");
    router.navigate("/screens/settings");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.headerText}>My Profile</Text>
        <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
        />
      </View>
        <Image
          style={styles.Pic}
          source={require("../../assets/images/image 8.png")}
        />
        {/* <Pressable onPress={handleClick7}>
          <Image
            style={styles.Settings}
            source={require("../../assets/images/Vector (6).png")}
          />
        </Pressable> */}
        <Text style={styles.SchoolName}>Torrance High</Text>
        <Text style={styles.UserName}>Christian Jimenez</Text>
      <View style={styles.AboutView}>
        <Text style={styles.About}> About:</Text>
      </View>
      <View style={styles.AboutContainer}>
        <Text style={styles.AboutDesc}>
          I like video games, helping out my community and cats!{" "}
        </Text>
        <Text style={styles.HoursCompleated}>Total Hours Completed:</Text>
        <Text style={styles.TotalHours}>75 hours</Text>
        <Text style={styles.MostRecentEvent}>Most Recent Event(s):</Text>
        <Text style={styles.RecentEvent}>Park Clean-Up</Text>
        <View style={styles.moreContext}>
          <Text style={styles.more}>More</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable onPress={handleClick} style={styles.hrButton}>
          <Image
            style={styles.hrIcon}
            source={require("../../assets/images/Vector (1).png")}
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
      <Image
        style={styles.wave}
        source={require("../../assets/images/Vector 16 (1).png")}
        // contentFit="cover"
        // transition={1000}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  UserName: {
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    top: 220,
    left: 112,
    height: 79,
  },
  SchoolName: {
    position:'absolute',
    fontSize: 25,
    fontWeight: "400",
    top: 250,
    left: 112,
    height: 76,
    width: 270
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  Settings: {
    position:'absolute',
    top:146,
    left:196,
    height: 39,
    width: 37,
  },
  Pic: {
    position: "absolute",
    top: 215,
    left: 20,
    width: 75,
    height: 75,
  },
  AboutDesc: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 25,
    left: 15,
    color: '#287090',
    fontSize: 20
  },
  AboutView: {
    position: "absolute",
    top: 341,
    left: 32,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    zIndex: 1,
    borderRightColor: "#319BC8",
    borderLeftColor: "#319BC8",
    borderColor: "#319BC8",
    backgroundColor: "#88DAFD",
    height: 50,
    width: 108,    
  },
  About: {
    // position: "absolute",

    top: 5,
    fontWeight: '600',
    fontSize: 29,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  HoursCompleated: {
    position: "absolute",
    fontSize: 20,
    top: 95,
    left: 15,
    fontWeight: '600'
  },
  TotalHours: {
    position: "absolute",
    fontSize: 20,
    top: 130,
    left: 15,
    color: '#287090'
  },
  TodaysHours: {
    top: -110,
    fontSize: 20,
  },
  FavoriteEvent: {
    top: -80,
    fontSize: 20,
  },
  EventName: {
    top: -70,
    fontSize: 20,
  },
  MostRecentEvent: {
    position: "absolute",
    fontSize: 20,
    top: 180,
    left: 15,
    fontWeight: '600'
  },
  RecentEvent: {
    position: "absolute",
    fontSize: 20,
    top: 215,
    left: 15,
    color: '#287090'
  },
  AboutContainer: {
    position: "absolute",
    borderWidth: 4,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    height: 314,
    width: 327,
    backgroundColor: "#88DAFD",
    top: 387,
    left: 32,
    borderColor: "#319BC8",
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
    borderColor: "#319BC8",
    width: "100%",
    height: 120,
  },
  Header: {
    position: "absolute",
    borderWidth: 6,
    borderRadius: 12,
    borderColor: "#319BC8",
    width: 450,
    height: 120,
    top: 0,
    backgroundColor: "#4BB8E7",
  },
  headerText: {
    top: 47,
    right: -20,
    fontSize: 40,
    color: "#22799F",
  },
  profile: {
    top: -5,
    right: -350,
  },
  wave: {
    position: "absolute",
    width: 491,
    height: 554,
    zIndex: -1,
    bottom: 30,
    left: -7,
    // transform:rotate(90deg);
  },
  more: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  moreContext: {
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#33A94D",
    left: 220,
    top: 260,
    position: "absolute",
    borderColor: "#33A94D",
    fontWeight: '400'
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    top: 5,
  },
});
