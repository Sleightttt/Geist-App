import React from "react";
import { Text, TouchableOpacity, View, Image, Animated } from "react-native";
import { icons } from "../../constants";
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
          <View style={styles.bgFade}>
            <Text style={styles.card}>User's Name</Text>
            <Text style={styles.card}>User's Pronouns</Text>
            <Text style={styles.card}>User's Occupation</Text>
            <Text style={styles.card}>User's School</Text>
            <Text style={styles.cardSpacer}></Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={icons.heart}
              style={[styles.btnImg, { tintColor: "#52528C" }]}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </PanGestureHandler>
  );
};

export default Flipper;
