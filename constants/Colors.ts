/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  app: {
    primary: "#3461fd",
    primaryLight: "#3461fd30",
    primarySuperLight: "#3461fd10",
  },
  light: {
    text: "#11181C",
    background: "#fff",
    border: "#e1e1e1",
    borderLight: "#f2f2f2",
    tint: tintColorLight,
    icon: "#969696",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#0d1014",
    border: "#2d2d2d",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
