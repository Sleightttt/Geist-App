import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from ".././constants";

const styles = StyleSheet.create({
  matchBox: {
    width: "100%",
    flexDirection: "row",
    height: 70,
    // backgroundColor: COLORS.secondary,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 0.5,
  },
  profilePic: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 25,
    margin: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    // },
  },
  chatName: {
    padding: 5,
    fontSize: 15,
    color: COLORS.black,
  },
  chatText: {
    paddingLeft: 5,
    fontSize: 12,
    color: COLORS.secondary,
  },
});

export default styles;
