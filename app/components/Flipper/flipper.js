import React from "react";
import { Text, TouchableOpacity, View, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component
import { icons, images } from "../../constants";
import styles from "./flipper.style";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const Flipper = () => {
  const onSwipeEvent = (event) => {
    if (event.nativeEvent.state === State.END) {
      // Swipe gesture ended
      const swipeDirection =
        event.nativeEvent.translationX > 0 ? "right" : "left";
      console.log("Swiped", swipeDirection);
      // Handle your logic for right and left swipes here
    }
  };
  return (
    <PanGestureHandler onGestureEvent={onSwipeEvent}>
      <View>
        <TouchableOpacity style={styles.container}>
          <Image
            source={images.profile}
            resizeMode="cover"
            style={styles.backgroundImage}
          />
          <View style={styles.bgFade}>
            {/* Use LinearGradient for the gradient background */}
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.9)", "transparent"]} // Gradient from 20% opacity to none
              start={{ x: 0.5, y: 1 }} // Start at the middle of the container's top edge
              end={{ x: 0.5, y: 0 }}
              style={styles.gradientBackground}
            />
            <Text style={styles.cardHeader}>Brennan</Text>
            <Text style={styles.card}>He/Him</Text>
            <Text style={styles.card}>Software Engineer</Text>
            <Text style={styles.card}>App Academy</Text>
            <Text style={styles.cardSpacer}></Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={icons.heartOutline}
              style={[styles.btnImg, { tintColor: "#AED6F1" }]}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.container2}>
          <Text>Hi</Text>
          <Image
            source={images.profile2}
            resizeMode="cover"
            style={styles.backgroundImage2}
          />
        </View>
        <View style={styles.container2}>
          <Text>Hi</Text>
          <Image
            source={images.profile2}
            resizeMode="cover"
            style={styles.backgroundImage2}
          />
        </View>
        <View style={styles.container2}>
          <Text>Hi</Text>
          <Image
            source={images.profile2}
            resizeMode="cover"
            style={styles.backgroundImage2}
          />
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default Flipper;
