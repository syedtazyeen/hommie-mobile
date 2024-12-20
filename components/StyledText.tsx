import { Text, TextProps } from "./Themed";

export function TextLight(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Light" }]} />;
}

export function TextRegular(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Regular" }]} />;
}

export function TextMedium(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Medium" }]} />;
}

export function TextSemibold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Semibold" }]} />;
}

export function TextBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Bold" }]} />;
}
