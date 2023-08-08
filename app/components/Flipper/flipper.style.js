import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative", // Make the container a reference for positioning
    width: "100%",
    height: 500,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  card: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    padding: 5,
    paddingLeft: 10,
  },
  cardSpacer: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    padding: 15,
    paddingLeft: 10,
  },
  btn: {
    position: "absolute",
    bottom: 0, // Adjust to place at the bottom
    left: 0, // Adjust to place at the left
    paddingLeft: 10,
    paddingBottom: 5,

    zIndex: 1,
  },
  btnImg: {
    width: 50,
    height: 50,
  },
  bgFade: {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Black with 50% opacity
    width: "100%",
    paddingVertical: 10, // Adjust as needed
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: SIZES.medium,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10, // For Android
  },
});

export default styles;
