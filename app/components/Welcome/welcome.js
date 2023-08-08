import React from "react";
import { Text, View } from "react-native";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.userName}>Sup, Dawg</Text>
          <Text style={styles.welcomeMessage}>Find your Boo</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
