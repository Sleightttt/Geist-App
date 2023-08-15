import react from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";
import Nav from "../components/Nav/nav";

const Matches = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.primary },
              headerTintColor: COLORS.secondary,
              headerShadowVisible: false,
              gestureDirection: "vertical",

              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
              ),
              headerTitle: "",
            }}
          />
        </View>
        <Text>wut</Text>
      </ScrollView>
      <Nav activeNum={0} />
    </SafeAreaView>
  );
};

export default Matches;
