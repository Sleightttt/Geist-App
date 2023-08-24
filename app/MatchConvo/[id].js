import react from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { Stack } from "expo-router";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images, convo } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";
import Nav from "../components/Nav/nav";
import styles from "../MatchConvo/matchconvo.style";

const MatchConvo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: COLORS.primary },
              headerTintColor: COLORS.secondary,
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
              ),
              headerTitle: "PROFILE",
            }}
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              resizeMode="cover"
              style={styles.profilePic}
              source="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </View>
        </View>
        <View></View>
      </ScrollView>
      <Nav activeNum={2} />
    </SafeAreaView>
  );
};

export default MatchConvo;
