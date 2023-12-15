// Nav.js
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./nav.style";
import { icons, COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Nav = ({ activeNum }) => {
  const router = useRouter();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(activeNum);

  const handleHeartsIconClick = () => {
    router.push("/Matches/Matches");
  };

  const handleGhostIconClick = () => {
    setActiveTab(1);
    router.push("/");
  };
  const handleProfileIconClick = () => {
    router.push("/Profile/Profile");
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
        onPress={() => {
          handleGhostIconClick();
        }}
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
        onPress={() => {
          handleProfileIconClick();
        }}
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
