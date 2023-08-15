import react from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";
import Nav from "../components/Nav/nav";

const Profile = () => {
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
              headerTitle: () => (
                <>
                  <Image
                    source={icons.ghostright}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                  />
                  <ImageBackground
                    source={icons.heart}
                    overlayColor={COLORS.secondary}
                    imageStyle={{ tintColor: COLORS.secondary }}
                    style={{
                      width: 35,
                      height: 35,
                      resizeMode: "contain",
                      tintColor: COLORS.secondary,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        textAlign: "center",
                        marginTop: 8,
                      }}
                    >
                      3
                    </Text>
                  </ImageBackground>
                  <Image
                    source={icons.ghostleft}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                  />
                </>
              ),
            }}
          />
        </View>
        <Text>Profile</Text>
      </ScrollView>
      <Nav activeNum={2} />
    </SafeAreaView>
  );
};

export default Profile;
