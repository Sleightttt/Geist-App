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

let matches = [
  {
    name: "Jennifer",
    age: 31,
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jenny",
    age: 32,
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jen",
    age: 30,
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

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
              headerTitle: "MATCHES",
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
