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
          style={styles.iconImg}
          resizeMode="cover"
          source={icons.transparency}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Boo's</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
