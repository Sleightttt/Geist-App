import react from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";
import Nav from "../components/Nav/nav";
import styles from "./matches.style";

let matches = [
  {
    name: "Jennifer",
    age: 31,
    profilePic: images.actualcouch,
  },
  {
    name: "Jenny",
    age: 32,
    profilePic: images.actualcouch,
  },
  {
    name: "Jen",
    age: 30,
    profilePic: images.actualcouch,
  },
  {
    name: "Jenni",
    age: 31,
    profilePic: images.actualcouch,
  },
  {
    name: "Jenna",
    age: 32,
    profilePic: images.actualcouch,
  },
  {
    name: "Jenn",
    age: 30,
    profilePic: images.actualcouch,
  },
  {
    name: "Jenz",
    age: 32,
    profilePic: images.actualcouch,
  },
  {
    name: "Jennaaa",
    age: 30,
    profilePic: images.actualcouch,
  },
];

let chats = [
  {
    name: "Bettsy",
    chat: "Hey there! We should go out sometime!",
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Betsay",
    chat: "Where is your favorite place to eat?",
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Betaty",
    chat: "Omg i love your dog!",
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Beetty",
    chat: "Hey, you're from the same city as me!",
    profilePic:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Matches = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
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
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
            height: 80,
            paddingTop: 10,
            borderBottomColor: COLORS.secondary,
            borderBottomWidth: 0.5,
            paddingLeft: 4,

            // backgroundColor: COLORS.secondary,
          }}
          data={matches}
          renderItem={(item) => (
            <TouchableOpacity
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
              onPress={() => {
                router.push(`/search/${item.name}`);
              }}
            >
              <Image
                resizeMode="cover"
                source={item.item.profilePic}
                style={styles.profilePic}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ columnGap: SIZES.small, paddingRight: 10 }}
          horizontal
        />

        <FlatList
          data={chats}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => {
                router.push(`/search/${item.name}`);
              }}
            >
              <View style={styles.matchBox}>
                <TouchableOpacity
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  <Image
                    resizeMode="cover"
                    source={{ uri: item.item.profilePic }}
                    style={styles.profilePic}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.chatName}>{item.item.name}</Text>
                  <Text style={styles.chatText}>{item.item.chat}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </ScrollView>
      <Nav activeNum={0} />
    </SafeAreaView>
  );
};

export default Matches;
