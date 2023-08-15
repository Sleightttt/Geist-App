// Nav.js
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./nav.style";
import { icons } from "../../constants";

const Nav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton}>
        <Image
          style={[styles.iconImg, { tintColor: "#52528C" }]}
          resizeMode="contain"
          source={icons.hearts}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Image
          style={[styles.iconImg, { tintColor: "#52528C" }]}
          resizeMode="contain"
          source={icons.ghost}
          onPress={() => router.push("/swipe")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Image
          style={[styles.iconImg, { tintColor: "#52528C" }]}
          resizeMode="contain"
          source={icons.dating}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
