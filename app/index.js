import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter, useRoute } from "expo-router";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn/screenheaderbtn";
import { COLORS, FONT, SIZES, SHADOWS, icons, images } from "./constants";
import Welcome from "./components/Welcome/welcome";
import Flipper from "./components/Flipper/flipper";
import Nav from "./components/Nav/nav";
import { useState } from "react";
import LinearGradient from "expo-linear-gradient";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  // const route = useRoute();

  console.log("Current route name:", router);

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
              headerTitle: "Geist",
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
      <Nav />
    </SafeAreaView>
  );
};

export default Home;
