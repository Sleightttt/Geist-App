import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { Stack, useRouter, useRoute } from "expo-router";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn/screenheaderbtn";
import { COLORS, FONT, SIZES, SHADOWS, icons, images } from "./constants";
import Welcome from "./components/Welcome/welcome";
import Flipper from "./components/Flipper/flipper";
import Nav from "./components/Nav/nav";
import { useState } from "react";
// import LinearGradient from "expo-linear-gradient";
import Matches from "./components/Matches/matches";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

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

          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              router.push(`/search/${searchTerm}`);
            }}
          />
          <Flipper />
        </View>
      </ScrollView>
      <Nav activeNum={1} />
    </SafeAreaView>
  );
};

export default Home;
