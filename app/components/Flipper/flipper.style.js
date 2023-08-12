import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative", // Make the container a reference for positioning
    width: "100%",
    height: 500,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  container2: {
    position: "relative", // Make the container a reference for positioning
    width: "100%",
    height: 500,
    backgroundColor: COLORS.primary,

    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: 3,
  },
  card: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    padding: 3,
    paddingLeft: 15,
  },
  cardHeader: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    padding: 5,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  backgroundImage2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  cardSpacer: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    padding: 15,
    paddingLeft: 10,
    marginTop: 10,
  },
  btn: {
    position: "absolute",
    bottom: 0, // Adjust to place at the bottom
    left: 0, // Adjust to place at the left
    paddingLeft: 15,
    paddingBottom: 5,

    zIndex: 1,
  },
  btnImg: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  bgFade: {
    // backgroundColor: "rgba(0, 0, 0, 0.2)", // Black with 50% opacity
    width: "100%",
    paddingVertical: 10, // Adjust as needed
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4, // Negative value to place the shadow above
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10, // For AndroidAndroid
    borderBottomLeftRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
  },
  gradientBackground: {
    position: "absolute",
    width: "100%",
    height: "111%",
  },
  smallIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  iconInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingBottom: 5,
  },
});

export default styles;
