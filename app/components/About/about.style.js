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
    margin: 5,
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 15,
    fontWeight: "bold",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
  },
  aboutText: {
    marginTop: 10,
    color: COLORS.secondary,
    fontWeight: "bold",
    fontSize: 18,
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
  },
});

export default styles;
