import React from "react";
import { Text, View, Image } from "react-native";
import { icons, COLORS } from "../../constants";
import styles from "./location.style";
import { TouchableOpacity } from "react-native-gesture-handler";

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
          <TouchableOpacity>
            <Image style={styles.smallIcon2} source={icons.close} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconBox2}>
          <TouchableOpacity>
            <Image style={styles.smallIcon} source={icons.superLike} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconBox1}>
          <TouchableOpacity>
            <Image style={styles.smallIcon} source={icons.checked} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Location;
