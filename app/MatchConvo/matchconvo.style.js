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
  },
  sentBox: {
    backgroundColor: COLORS.secondary,
    padding: 5,
    margin: 5,
    borderRadius: 12,
  },
  sentBubble: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 12,
  },
  recievedBox: {
    backgroundColor: COLORS.secondary,
    padding: 5,
    margin: 5,
    borderRadius: 12,
  },
  recievedBubble: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 12,
  },
});

export default styles;
