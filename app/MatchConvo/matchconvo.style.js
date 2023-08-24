import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from ".././constants";

const styles = StyleSheet.create({
  matchBox: {
    width: "100%",
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
});

export default styles;
