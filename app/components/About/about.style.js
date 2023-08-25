import { StyleSheet } from "react-native";
import { COLORS, FONT } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },
  aboutContainer: {
    display: "flex",
    padding: 15,
  },
  aboutHeaderText: {
    color: COLORS.secondary,
    fontSize: 20,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next line
    // width: "100%", // Set the width to maximum desired width
  },
  interestBubble: {
    padding: 5,
    marginTop: 5,
    margin: 2,
    color: COLORS.white,
    backgroundColor: COLORS.secondary,

    fontWeight: "bold",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
    fontFamily: FONT.regular,
    borderRadius: 15,
  },
  interestText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontFamily: FONT.regular,
    margin: 3,
  },
  aboutText: {
    marginTop: 10,
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: FONT.regular,
  },
  promptBox: {
    height: 50,
    backgroundColor: COLORS.secondary,
    margin: 10,
    borderRadius: 12,
  },
  promptText: {
    margin: 5,
    color: COLORS.white,
    fontWeight: "bold",
    fontFamily: FONT.regular,
  },
});

export default styles;
