import React from "react";
import { Text, View } from "react-native";
import { icons, COLORS } from "../../constants";
import styles from "./report.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Report = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.reportBtn}>
        <Text style={styles.reportBtnText}>Report this user</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Report;
