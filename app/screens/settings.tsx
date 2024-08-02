import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    Pressable,
    StatusBar,
    Settings,
  } from "react-native";
  
  import { HelloWave } from "@/components/HelloWave";
  import ParallaxScrollView from "@/components/ParallaxScrollView";
  import { ThemedText } from "@/components/ThemedText";
  import { ThemedView } from "@/components/ThemedView";
  import { router, useNavigation } from "expo-router";
  import { useEffect } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  
  export default function HomeScreen() {
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
      alert("You are already on this page");
      // router.navigate("/screens/settings");
    };
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.headerText}>My Profile</Text>
          <Pressable onPress={handleClick2}>
            <Image
              style={styles.profile}
              source={require("../../assets/images/image 8.png")}
            />
            </Pressable>
        </View>
        <View style={styles.toptext}>
        <Image
              style={styles.Pic}
              source={require("../../assets/images/image 8.png")}
            />
            <Pressable onPress={handleClick7}>
            <Image
              style={styles.Settings}
              source={require("../../assets/images/Vector (6).png")}
            />
            </Pressable>
          <Text style={styles.SchoolName}>Torrance High</Text>
          <Text style={styles.UserName}>Christian Jimenez</Text>
        </View>
        <View style={styles.AboutView}>
          <Text style={styles.About}> About:</Text>
        </View>
        <View style={styles.AboutContainer}>
          <Text style={styles.AboutDesc}>
            I like video games, helping out my community and cats.{" "}
          </Text>
          <Text style={styles.HoursCompleated}>Total hours completed:</Text>
          <Text style={styles.TotalHours}>75 hours</Text>
          <Text style={styles.MostRecentEvent}>Most recent event(s):</Text>
          <Text style={styles.RecentEvent}>Park clean-up</Text>
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
            <Text style={styles.text2}>map</Text>
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
      top: -185,
      left: 80,
      height:79,
    },
    SchoolName: {
      fontSize: 25,
      //fontWeight: "bold",
      top: -180,
      left: 80,
      height: 76,
      width: 270,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
    Settings: {
      top:-218,
      right: -290,
      height:39,
      width:37,
      backgroundColor:'319BC8',
    },
    Pic: {
      position: "absolute",
      top: -200,
      left: -30,
      width:100,
      height:100,
    },
    AboutDesc: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 25,
      left: 20,
    },
    AboutView:{
      position:"absolute",
      top:290,
      left:42,
      borderRightWidth:4,
      borderLeftWidth:4,
      borderTopWidth:4,
      borderTopRightRadius:15,
      borderTopLeftRadius:15,
      zIndex:1,
      borderRightColor:'#319BC8',
      borderLeftColor:"#319BC8",
      borderColor:'#319BC8',
     backgroundColor: "#88DAFD",
    },
    About: {
      // position: "absolute",
      height: 55,
      width: 108,
      
      fontSize: 30,
      color: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
    },
    HoursCompleated: {
      position: "absolute",
      fontSize: 20,
      top: 85,
      left: 20,
    },
    TotalHours: {
      position: "absolute",
      fontSize: 20,
      top: 125,
      left: 75,
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
      top: 185,
      left: 20,
    },
    RecentEvent: {
      position: "absolute",
      fontSize: 20,
      left: 75,
      top: 220,
    },
    AboutContainer: {
      position: "absolute",
      borderWidth: 4,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      borderTopRightRadius:15,
      height: 314,
      width: 327,
      backgroundColor: "#88DAFD",
      bottom: 149,
      left:42,
      borderColor:'#319BC8'
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
      borderBottomWidth: 10,
      borderColor: "#319BC8",
      width: 417,
      height: 120,
      top: 0,
      backgroundColor: "#4BB8E7",
    },
    headerText: {
      position: "absolute",
      top: 40,
      fontSize: 50,
      color: "#22799F",
      top: 20,
      fontFamily:'NATS'
    },
    profile: {
      top: 30,
      right: -320,
      height:59,
      width:59,
    },
    toptext: {
      position: "absolute",
    },
    wave:{
      position:'absolute',
      width:491,
      height:554,
      zIndex:-1,
      bottom:30,
      left:-75,
      // transform:rotate(90deg);
    },
    more: {
      position: "absolute",
      fontSize: 20,
      left: 75,
      top: 220,
      zIndex:3,
    },
  });