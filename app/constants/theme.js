const COLORS = {
  primary: "#AED6F1",
  secondary: "#52528C",
  tertiary: "#D4AFB9",
  fourth: "#40E0D0",
  fifth: "#3C362A",

  gray: "#83829A",
  gray2: "#C1C0C8",
  black: "#1E1F20",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  gradientStart: "#AED6F1",
  gradientEnd: "#52528C",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
