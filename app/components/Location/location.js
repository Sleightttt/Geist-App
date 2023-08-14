import React from "react";
import { Text, View, Image } from "react-native";
import { icons, COLORS } from "../../constants";
import styles from "./location.style";

const jobTypes = [
  "Hiking",
  "Camping",
  "Video Games",
  "Coding",
  "Time With Friends",
];

const lookingFor = ["Monogomy", "Marraige", "Polyamory", "ENM", "Fling"];

const Location = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeaderText}>
          {" "}
          <Image source={icons.location} style={styles.smallIcon} />
          Brennan's Location
        </Text>
        <Text style={{ paddingLeft: 10, color: COLORS.secondary }}>
          11 Miles away
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconBox1}>
          <Text>Yes</Text>
        </View>
        <View style={styles.iconBox2}>
          <Text>Super Yes</Text>
        </View>
        <View style={styles.iconBox1}>
          <Text>No</Text>
        </View>
      </View>
    </View>
  );
};

export default Location;
