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
          <Image source={icons.location} style={styles.smallIcon1} />
          Brennan's Location
        </Text>
        <Text style={{ paddingLeft: 10, color: COLORS.secondary }}>
          11 Miles away
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconBox1}>
          <Image style={styles.smallIcon2} source={icons.close} />
        </View>
        <View style={styles.iconBox2}>
          <Image style={styles.smallIcon} source={icons.superLike} />
        </View>
        <View style={styles.iconBox1}>
          <Image style={styles.smallIcon} source={icons.checked} />
        </View>
      </View>
    </View>
  );
};

export default Location;
