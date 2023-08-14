import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative", // Make the container a reference for positioning
    width: "100%",
    height: 500,
    backgroundColor: COLORS.primary,

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
  interestCont: {
    display: "flex",
    flexDirection: "row",
  },
  interestBubble: {},
});

export default styles;
