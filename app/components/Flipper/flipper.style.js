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
    position: "relative",
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
    paddingLeft: 0,
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
    bottom: 0,
    left: 0,
    paddingLeft: 13,
    paddingBottom: 5,
    zIndex: 1,
  },
  btnImg: {
    width: 50,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  bgFade: {
    width: "100%",
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    marginBottom: 3,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10, // For Android
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

    tintColor: COLORS.white,
  },
  iconInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  pusher: {
    paddingLeft: 25,
    objectFit: "contain",
  },
  pusher2: {
    paddingLeft: 9.5,
  },
});

export default styles;
