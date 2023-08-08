import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    flexDirection: "row", // Make the buttons appear in a row
    justifyContent: "center", // Center the buttons horizontally
    alignItems: "center", // Center the buttons vertically
    paddingVertical: SIZES.small,
  },
  navButton: {
    flex: 1, // Distribute the available space equally among buttons
    marginHorizontal: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonText: {
    color: COLORS.white,
    fontFamily: FONT.bold, // Set your desired font family
    fontSize: SIZES.body3,
  },
});

export default styles;
