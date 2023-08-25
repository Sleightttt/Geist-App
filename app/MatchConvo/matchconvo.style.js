import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from ".././constants";

const styles = StyleSheet.create({
  matchBox: {
    width: "100%",
  },
  profilePic: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.gray,
    borderRadius: 30,
    margin: 5,
  },
  sentBox: {
    borderRadius: 12,
    width: "100%",
    alignItems: "flex-start",
  },
  sentBubble: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 12,
    maxWidth: "60%",
    margin: 5,
    padding: 5,
  },
  receivedBox: {
    alignItems: "flex-end",
    borderRadius: 12,
    width: "100%",
  },
  receivedBubble: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 12,
    maxWidth: "60%",
    margin: 5,
    padding: 5,
  },
});

export default styles;
