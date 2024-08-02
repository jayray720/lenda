import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ coordinate, title, description }) => {
    return (
        <Marker coordinate={coordinate}>
            <View style={styles.container}>
                <ImageBackground
            style={styles.mapPic}
            source={require("../../assets/images/Group 37.png")} resizeMode="cover">
                <View style={styles.marker}>
                     <Image style={styles.EventPic}
                     source={require("../../assets/images/image 21 (1).png")}/>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{description}</Text>

                   </View>
                </View>
                </ImageBackground>
            </View>
        </Marker>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    marker: {
        // paddingVertical: 50,
        // paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 0,
        width:200,
        height:175,
        // borderColor: '#3AC458',
    },
    // marker 1: {
    //     backgroundColor: 'white',
    //     padding: 5,
    //     borderRadius: 5,
    //     borderWidth: 1,
    //     borderColor: '#ddd',
    // },
    mapPic: {
        width:'100%',
        height:'100%',

    },
    title: {
        color:'#FFFFFF',
        position:'absolute',
        right:15,
        top:25,
        width:72,
        height:60,
        fontSize:15,
        textAlign:'center',
    },
    rating: {
        color: '#000000',
        // position:'absolute',
        // bottom:35,
        // right:15,
        textAlign:"center"


    },
    ratingContainer: {
        backgroundColor:"#F6BB24",
        width:53,
        height:17,
        borderRadius:5,
        position:'absolute',
        right:20,
        bottom:67,
    },
    EventPic:{
        width:85,
        height:76,
        position:'absolute',
        bottom:65,
        left:20,
        borderWidth:3,
        borderRadius:7,
        borderColor:'#FFFFFF'
        
    },
});

export default CustomMarker;
