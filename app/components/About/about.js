import React from "react";
import { Text, View } from "react-native";
import styles from "./about.style";

const jobTypes = [
  "Hiking",
  "Camping",
  "Video Games",
  "Coding",
  "Time With Friends",
];

const lookingFor = [
  "Monogomy",
  "Marraige",
  "Kids",
  "Long-term",
  "Relationship",
];

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeaderText}>Interests</Text>
        <View style={styles.interestsContainer}>
          {jobTypes.map((item, index) => (
            <Text key={index} style={styles.interestBubble}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeaderText}>About Me</Text>
        <Text style={styles.aboutText}>
          This is all about me blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeaderText}>Looking For</Text>
        <View style={styles.interestsContainer}>
          {lookingFor.map((item, index) => (
            <Text key={index} style={styles.interestBubble}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeaderText}>Prompt Preview</Text>
        <View style={styles.promptBox}>
          <Text style={styles.promptText}>
            Communication is something that is very important to me. What do
            you...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default About;
