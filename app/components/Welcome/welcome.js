import React from "react";
import { Text, View } from "react-native";
import styles from "./welcome.style";
import { headerTags, headerGreetings } from "../../constants";

const Welcome = () => {
  const ranHeader = headerTags[Math.floor(Math.random() * headerTags.length)];

  const ranGreeting =
    headerGreetings[Math.floor(Math.random() * headerGreetings.length)];

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.userName}>{ranGreeting}, Brennan</Text>
          <Text style={styles.welcomeMessage}>{ranHeader}</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
