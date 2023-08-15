import { StyleSheet } from "react-native";
import { COLORS } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
    width: "100%", // Set the width to maximum desired width
  },
  interestBubble: {
    padding: 5,
    margin: 5,
    color: COLORS.white,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
  },
  aboutText: {
    marginTop: 10,
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
  },
  smallIcon: {
    width: 40,
    height: 40,
    margin: 10,
    tintColor: COLORS.secondary,
  },
  smallIcon1: {
    width: 20,
    height: 20,
    // margin: 10,
    tintColor: COLORS.secondary,
  },
  smallIcon2: {
    width: 38,
    height: 38,
    margin: 10,
    tintColor: COLORS.secondary,
  },
  iconsContainer: {
    height: 100,
    flex: 1,
    flexDirection: "row",
  },
  iconBox1: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "33%",
  },
  iconBox2: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: "100%",
    width: "33%",
  },
});

export default styles;
