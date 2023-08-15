// Nav.js
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./nav.style";
import { icons, COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Nav = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(1); // Default active tab is the middle one

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleHeartsIconClick = () => {
    console.log("should go to /matches");
    router.push("/Matches"); // Navigate to the "Matches" screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === 0 && {
            backgroundColor: COLORS.secondary,
            tintColor: COLORS.primary,
          },
        ]}
        onPress={() => {
          handleTabPress(0);
          handleHeartsIconClick();
        }}
      >
        <Image
          style={[
            styles.iconImg,
            activeTab === 0 && {
              tintColor: COLORS.white,
            },
          ]}
          resizeMode="contain"
          source={icons.hearts}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === 1 && {
            backgroundColor: COLORS.secondary,
            tintColor: COLORS.primary,
          },
        ]}
        onPress={() => handleTabPress(1)}
      >
        <Image
          style={[
            styles.iconImg,
            activeTab === 1 && {
              tintColor: COLORS.white,
            },
          ]}
          resizeMode="contain"
          source={icons.ghost}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === 2 && { backgroundColor: COLORS.secondary },
        ]}
        onPress={() => handleTabPress(2)}
      >
        <Image
          style={[
            styles.iconImg,
            activeTab === 2 && {
              tintColor: COLORS.white,
            },
          ]}
          resizeMode="contain"
          source={icons.dating}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
