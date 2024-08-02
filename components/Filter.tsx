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
  import React, { useEffect, useState } from "react";
  import { FontAwesome } from "@expo/vector-icons";
  import MapView, { Marker } from "react-native-maps";
  import { Image } from "expo-image";
  
  export default function SignUpScreen() {
    const navigation = useNavigation();
    const [showAppOptions, setShowAppOptions] = useState(false);
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  
    return (
      <View style={styles.container}>

      </View>
    );
  }
  const styles = StyleSheet.create({
    titleContainer: {
      alignItems: "center",
    },
    container: {
      backgroundColor: "#4BB8E7",
      alignItems: "center",
      height: "100%",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFFFFF",
    },
  
  });
  