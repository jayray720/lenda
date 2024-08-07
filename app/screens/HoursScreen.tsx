import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import Modal from "react-native-modal";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Circle } from "react-native-maps";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [count, setcount] = useState(0);
  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);
  const bg = {
    overlay: {
      background: "#FFFF00",
    },
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleClick = () => {
    alert("you are already on this page");
    // router.navigate("/screens/HoursScreen");
  };
  const handleClick2 = () => {
    // alert("You are already on this page")
    router.navigate("/screens/ProfileScreen");
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
  const handleClick10 = () => {
    setModalVisible(true);
    //  router.navigate('/screens/orgpost')
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.headerText}>Request Hours</Text>
        <FontAwesome
          name="user-circle"
          size={50}
          color="black"
          style={styles.profile}
          onPress={handleClick2}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // hasBackdrop={true}
        // backdropColor={"black"}
        // backdropOpacity={0.70}
        // onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hours</Text>

            <TouchableOpacity onPress={decrement}>
              <Text style={styles.minus}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity onPress={increment}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.notes}
              placeholder="Add Note..."
            ></TextInput>
            <Pressable style={styles.buttonclose}>
              <Text style={styles.request}>Request</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.search}>
        <TextInput style={styles.searchBar}>Search</TextInput>
        <Image
          style={styles.Filter}
          source={require("../../assets/images/gg_add (1).png")}
        />
      </View>

      <View style={styles.intersection}>
        <Text style={styles.searchText}>
          Select Hosts from your past and current post you worked with.
        </Text>
        <Image
          style={styles.Lines1}
          source={require("../../assets/images/Line 4.png")}
        />
        <Image
          style={styles.Lines2}
          source={require("../../assets/images/Line 4.png")}
        />
        <Image
          style={styles.Lines3}
          source={require("../../assets/images/Line 4.png")}
        />
      </View>
      <View style={styles.users}>
        <Image
          style={styles.user4}
          source={require("../../assets/images/image 24.png")}
        />
        <Text style={styles.Text4}>Osman Guevara</Text>
        <AntDesign
          name="checkcircleo"
          size={24}
          color="black"
          style={styles.Circle}
        />
        <Image
          style={styles.user3}
          source={require("../../assets/images/IMG_1866.png")}
        />
        <Text style={styles.Text3}>Patrick Jovel</Text>
        <AntDesign
          name="checkcircleo"
          size={24}
          color="black"
          style={styles.Circle2}
        />
        <Image
          style={styles.user2}
          source={require("../../assets/images/IMG_1867.png")}
        />
        <Text style={styles.Text2}>Christopher Daniel</Text>
        <AntDesign
          name="checkcircleo"
          size={24}
          color="black"
          style={styles.Circle3}
        />
        <Image
          style={styles.user}
          source={require("../../assets/images/IMG_1868 1.png")}
        />
        <Text style={styles.Text}>Bryan Manueles</Text>
        <Pressable onPress={handleClick10}>
          <AntDesign
            name="checkcircleo"
            size={24}
            color="black"
            style={styles.Circle4}
          />
        </Pressable>
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: -200,
    left: 130,
  },
  SchoolName: {
    fontSize: 25,
    fontWeight: "bold",
    top: -180,
    left: 130,
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
    top: -205,
    right: -160,
  },
  Pic: {
    top: -165,
    left: -10,
  },
  AboutDesc: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 25,
    left: 20,
  },
  About: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 15,
    height: 108,
    width: 108,
    backgroundColor: "#88DAFD",
    top: 290,
    left: 44,
    fontSize: 30,
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
    borderWidth: 1,
    borderRadius: 15,
    height: 314,
    width: 327,
    backgroundColor: "#88DAFD",
    bottom: 150,
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
    borderWidth: 4,
    borderColor: "#319BC8",
    width: "100%",
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 5,
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
    // position:'absolute',
    top: 47,
    right: -20,
    fontSize: 40,
    color: "#22799F",
  },
  profile: {
    top: -5,
    right: -350,
  },
  toptext: {
    position: "absolute",
  },
  search: {
    borderWidth: 1,
    paddingHorizontal: 50,
    position: "absolute",
    top: 150,
    borderRadius: 9999,
    width: 360,
    height: 35,
  },
  searchBar: {
    color: "#FFFFFF ",
    left: -40,
    fontSize: 25,
  },
  searchText: {
    color: "#8A8A8A",
    top: -240,
    left: 30,
    flex: 1,
    width: 300,
  },
  Filter: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    top: 5,
  },
  user: {
    position: "absolute",
    width: 65,
    height: 65,
    top: 150,
  },
  Text: {
    position: "absolute",
    bottom: 155,
    left: 80,
    fontSize: 20,
  },
  user2: {
    position: "absolute",
    width: 65,
    height: 65,
    top: 40,
    // left:50,
  },
  Text2: {
    position: "absolute",
    bottom: 35,
    left: 80,
    fontSize: 20,
  },
  user3: {
    position: "absolute",
    width: 65,
    height: 65,
    bottom: 10,
    // left:50,
  },
  Text3: {
    position: "absolute",
    top: 55,
    left: 80,
    fontSize: 20,
  },
  user4: {
    position: "absolute",
    width: 65,
    height: 65,
    bottom: 130,
    // left:50,
  },
  Text4: {
    position: "absolute",
    top: 165,
    left: 80,
    fontSize: 20,
  },
  Circle: {
    position: "absolute",
    left: 315,
    top: 60,
  },
  Circle2: {
    position: "absolute",
    left: 315,
    top: 165,
  },
  Circle3: {
    position: "absolute",
    bottom: 35,
    left: 315,
  },
  Circle4: {
    position: "absolute",
    bottom: 155,
    left: 315,
  },
  users: {
    position: "absolute",
    left: 20,
  },
  intersection: {
    position: "absolute",
    left: 10,
    borderRadius: 50,
  },
  Lines1: {
    position: "absolute",
    width: 390,
    height: 4,
    top: 30,
    color: "#F1F1F1",
  },
  Lines2: {
    position: "absolute",
    width: 390,
    height: 4,
    top: 140,
  },
  Lines3: {
    position: "absolute",
    width: 390,
    height: 4,
    bottom: 120,
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    top: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    backgroundColor: "#808080",
    height: "100%",
    width: "100%",
    marginBottom: 90,
  },
  modalView: {
    position: "absolute",
    margin: 20,
    backgroundColor: "#F3F3F7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 425,
    height: 460,
    bottom: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
  },
  minus: {
    position: "absolute",
    fontSize: 50,
    right: 60,
    top: 20,
  },
  plus: {
    position: "absolute",
    fontSize: 50,
    left: 60,
    top: 20,
  },
  counter: {
    position: "absolute",
    fontSize: 50,
    top: 100,
  },
  notes: {
    position: "absolute",
    borderWidth: 1,
    top: 200,
    paddingBottom: 75,
    width: 292,
    paddingTop: 10,
    borderRadius: 15,
    paddingLeft: 10,
  },
  buttonclose: {
    position: "absolute",
    borderWidth: 1,
    backgroundColor: "#88DAFD",
    borderColor: "#88DAFD",
    height: 64,
    width: 289,
    top: 350,
  },
  request: {
    alignSelf: "center",
    fontSize: 30,
    top: 12,
    color: "#287090",
  },
});
