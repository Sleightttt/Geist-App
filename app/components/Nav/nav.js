// Nav.js
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./nav.style";

const Nav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
