import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  reportBtn: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  reportBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
});

export default styles;
