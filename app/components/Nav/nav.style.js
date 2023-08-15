import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.white,
    flexDirection: "row", // Make the buttons appear in a row
    justifyContent: "center", // Center the buttons horizontally
    alignItems: "center", // Center the buttons vertically
    paddingVertical: SIZES.small,
    borderTopColor: COLORS.gray,
    borderTopWidth: 0.5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
  },
  navButton: {
    flex: 1, // Distribute the available space equally among buttons
    // marginHorizontal: SIZES.small,
    // paddingVertical: SIZES.small,
    // paddingHorizontal: SIZES.medium,

    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
    height: 50,
  },
  navButtonText: {
    color: COLORS.secondary,
    fontFamily: FONT.regular, // Set your desired font family
    fontSize: SIZES.small,
  },
  iconImg: {
    width: 30,
    height: 30,
  },
});

export default styles;
